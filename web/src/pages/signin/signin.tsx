import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../asseets/logo.svg';

import { Background, Content, Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail"/>

          <Input icon={FiLock} name="senha" type="password" placeholder="Senha"/>

          <Button id="Arroz" type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="login">
          <FiLogIn/>
          Criar conta
        </a>
      </Content>
      <Background/>
    </Container>
  </>
)

export default SignIn;
