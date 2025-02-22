import React, {ChangeEvent, useCallback, useRef} from "react";
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from "@unform/web";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

import api from '../../services/api'

import { useToast } from "../../hooks/toast";

import getValidationErrors from "../../utils/getValidationErrors";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, AvatarInput } from './styles'
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

interface ProfileFormData {
  name: string;
  email: string;
  password: string;
  old_password: string;
  password_confirmation: string;
}


const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const {addToast} = useToast()
  const history = useNavigate()

  const { user, updateUser } = useAuth()

  const handleSubmit = useCallback(async (data: ProfileFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        old_password: Yup.string(),
        password: Yup.string(),
        password_confirmation: Yup.string().oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      const {name, email, old_password, password, password_confirmation} = data

      const formData = {
        name,
        email,
        ...(old_password
        ? {
          old_password,
          password,
          password_confirmation ,
          }
        : {}),
      };

      const response = await api.put('/profile', formData)

      updateUser(response.data)

      history('/dashboard')

      addToast({
        type: 'success',
        title:'Perfil Atulizado!',
        description: 'Suas informações foram atualizadas com sucesso!'
      })

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return
      }

      addToast({
        type: 'error',
        title: 'Erro na atualização',
        description: 'Occorreu um erro ao atualizar o perfil, tente novamente',
      });
    }
  }, [addToast, history, updateUser])

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      const data = new FormData();

      data.append('avatar', e.target.files[0])

      api.patch('/users/avatar', data).then((response)=> {
        updateUser(response.data)

        addToast({
          type: 'success',
          title: 'Avatar atualizado com sucesso!',
          description: 'Seu avatar foi atualizado com sucesso!'
        })
      })
    }
  }, [addToast, updateUser])

  return (
      <Container>
        <header>
          <div>
            <Link to='/dashboard'>
              <FiArrowLeft/>
            </Link>
          </div>
        </header>

        <Content>
            <Form ref={formRef} initialData= {{
              name: user.name,
              email: user.email,
            }}onSubmit={handleSubmit} placeholder={undefined} onPointerEnterCapture={Content} onPointerLeaveCapture={Content}>
              <AvatarInput>
                <img src={user.avatar_url} alt={user.name} />
                <label htmlFor= 'avatar'>
                  <FiCamera/>
                  <input type="file" id='avatar' onChange={handleAvatarChange}/>
                </label>
              </AvatarInput>

              <h1>Meu perfil</h1>

              <Input
                name="name"
                icon={FiUser}
                placeholder="Nome"
              />

              <Input
                name="email"
                icon={FiMail}
                placeholder="E-mail"
              />

              <Input
                containerStyle = {{ marginTop: 24 }}
                name="old_password"
                icon={FiLock}
                type="password"
                placeholder="Senha atual"
              />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Nova senha"
              />
              <Input
                name="password_confirmation"
                icon={FiLock}
                type="password"
                placeholder="Confirmar senha"
              />

              <Button type="submit">Confirmar mudanças</Button>
            </Form>
        </Content>
      </Container>
  )
}


export default Profile
