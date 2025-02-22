import React, {useRef, useCallback} from "react";
import { FiLogIn, FiMail, FiLock  } from 'react-icons/fi'
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from 'yup'
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import getValidationErrors from "../../utils/getValidationErrors";

import logoImg from '../../assets/logo.svg'

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background, AnimationContainer } from './styles'

interface SingInFormData {
  email: string,
  password: string,
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    async (data: SingInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        navigate('/dashboard')
        console.log('History', navigate)

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Occorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    }
,[signIn, addToast, history],
)

  return (
  <Container>
    <Content>
      <AnimationContainer>
        <img src={logoImg} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit} placeholder={undefined} onPointerEnterCapture={AnimationContainer} onPointerLeaveCapture={AnimationContainer}>
          <h1>Faça seu logon</h1>

          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <Link to="/forgot-password">Esqueci minha senha</Link>
        </Form>

        <Link to="./signup">
          <FiLogIn/>
          Criar conta
        </Link>
      </AnimationContainer>
    </Content>

    <Background/>
  </Container>
  )
}

export default SignIn
