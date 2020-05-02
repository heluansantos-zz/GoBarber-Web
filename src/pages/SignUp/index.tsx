import React from "react";
import { Container, Content, Background } from "./styles";
import logoImg from "../../assets/logo.svg";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="login">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
