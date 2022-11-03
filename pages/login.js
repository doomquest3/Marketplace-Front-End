import {useRouter} from "next/router"
import Link from "next/link";

import { 
  Button, 
  Card, 
  Col, 
  Container, 
  Form, 
  Row } from "react-bootstrap";



export default function Login() {

  const router = useRouter()
  
  function handleLogin(e){
    //TODO: lógica de loign para o sistema.
    e.preventDefault();
    console.log("Funcionando!")
    /*
    1. Verificar os dados inseridos
    2. Enviar os dados requisitados para o backend
    3.Esperar a resposta
      3.1 Se existir erro, alertar ao usuário
      3.2 Se a requisição estiver ok, salvar o token e vai para a frente
     */

      router.push("./categorias");
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
