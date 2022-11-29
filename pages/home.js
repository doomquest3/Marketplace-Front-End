import {useRouter} from "next/router"
import Link from "next/link";

import { 
  Button, 
  Card, 
  Col, 
  Container, 
  Form, 
  Row } from "react-bootstrap";

export default function home() {

    return(
        <>
           <container className="p-5">
            <Card>
                <Form>
                    <h1 className="text-center" >Cadastre a sua loja</h1>
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
