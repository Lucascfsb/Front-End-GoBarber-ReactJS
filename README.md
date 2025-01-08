# Front-End-GoBarber-ReactJS

O **GoBarber** é uma aplicação voltada para agendamentos de serviços de barbearia. Esta é a versão front-end web, que permite que clientes e prestadores de serviços acessem suas funcionalidades de forma intuitiva e eficiente.

---

## 📝 Sobre o Projeto

A aplicação web do **GoBarber** oferece uma interface moderna e responsiva para:

- **Clientes:**
  - Realizar login e cadastro.
  - Visualizar horários disponíveis para agendamentos.
  - Agendar serviços com prestadores.
  - Consultar agendamentos futuros e passados.

- **Prestadores de Serviços:**
  - Visualizar agendamentos diários.
  - Gerenciar sua agenda.

---

## 🚀 Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- **[React.js](https://reactjs.org/)** para construção da interface do usuário.
- **[TypeScript](https://www.typescriptlang.org/)** para tipagem estática no JavaScript.
- **[Axios](https://axios-http.com/)** para comunicação com a API.
- **[Styled-components](https://styled-components.com/)** para estilização da aplicação.
- **[React Router DOM](https://reactrouter.com/)** para gerenciamento de rotas.
- **[Yup](https://github.com/jquense/yup)** para validação de formulários.
- **[Unform](https://unform.dev/)** para manipulação de formulários.
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** para exibição de notificações.
- **[Polished](https://polished.js.org/)** para manipulação de cores na estilização.

---

## 🖼️ Imagens da Aplicação

### 💻 Página de Login

![image](https://github.com/user-attachments/assets/5538521e-cd47-4b1a-b679-bc0edff781c6)

### 📅 Dashboard

![image](https://github.com/user-attachments/assets/b9959c28-606a-42cb-866f-11feda5e9cdc)

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos:

- **Node.js** (v16 ou superior)
- **Yarn** (ou npm)
- API do GoBarber rodando no backend ([Instruções aqui](https://github.com/LucasCFS/node-GoBarber))

1. Clone o repositório:  
 ```bash
 git clone https://github.com/seu-usuario/web-GoBarber.git
 cd web-GoBarber
 ```
Instale as dependências:

```bash
yarn install
```

Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com base no .env.example, configurando a URL da API do backend.

Inicie a aplicação:

```bash
yarn start
```

🧪 Testes
Este projeto utiliza o Jest para testes. Para executar os testes, utilize:

```bash
yarn test
```
