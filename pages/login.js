import {useRouter} from "next/router"
import Link from "next/link";

import { 
  Button, 
  Card, 
  Col, 
  Container, 
  Form, 
  Row } from "react-bootstrap";
import { useState } from "react";
import authService from "../components/services/auth.service";
import { useAuthContext } from "../context/auth.context";



export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useAuthContext();

  if(isAuth){
    router.push("/categorias");
  }
  
  async function handleLogin(e){
    //TODO: lógica de login para o sistema.
    e.preventDefault();
    console.log("Funcionando!")
    
    

    //2. Enviar os dados requisitados para o backend

    //3.Esperar a resposta

      //3.1 Se existir erro, alertar ao usuário

      //3.2 Se a requisição estiver ok, salvar o token e vai para a frente

    try {
      //1. Verificar os dados inseridos
      await authService.login({
        email,
        password,
      });
      setIsAuth(true);
      router.push("/categorias");
    } catch (erro) {
      console.log(erro.status)
      alert("Falha ao autenticar, por favor tente novamente.")
    }

    
  }

  return (
    <>
      <container className="p-5">
        <Card>
          <Form onSubmit={handleLogin} >
            <h1 className="text-center" >Entrar na sua loja</h1>
            <Form.Group className="p-2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control 
              type="email"
              placeholder="Insira seu e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Senha</Form.Label>
              <Form.Control 
              type="password"
              placeholder="Insira sua senha"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group className="p-2 text-center" >
              <Button type="submit">Entrar no sistema</Button>
              <br></br>
              <Link href="/Nova-conta">
                <a>Crie uma conta</a>
              </Link>
            </Form.Group>
          </Form>
        </Card>
      </container>
    </>
  );
}
