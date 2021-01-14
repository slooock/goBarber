import React, {useCallback, useRef, useContext} from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import AuthContext from '../../context/AuthContext';

import logoImg from '../../asseets/logo.svg';

import { Background, Content, Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const auth = useContext(AuthContext);
  console.log(auth);

  const handleSubmit = useCallback(async (data: Object)=>{
    try{
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      });

      await schema.validate(data, {
        abortEarly: false
      });


    }catch(err){
      console.log(err);
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  },[]);

  return (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail"/>

          <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login">
          <FiLogIn/>
          Criar conta
        </a>
      </Content>
      <Background/>
    </Container>
  </>
)}

export default SignIn;
