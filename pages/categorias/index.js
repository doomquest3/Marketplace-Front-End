import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function Categorias() {
  const [data, setData] = useState([
    { name: "categoria x", createdAt: "xx/xx/xxxx", id: 1 },
    { name: "categoria y", createdAt: "xx/xx/xxxx", id: 2 },
    { name: "categoria z", createdAt: "xx/xx/xxxx", id: 3 },
  ]);

  return (
    <>
      <Card className="m-md-5 p-md-2">
        <h2 className="text-center">Categorias</h2>
        <Row className="pt-2">
          <Col md={10}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
          <Col className="d-grid">
            <Link href={"/categorias/cadastrar"}>
              <Button>Adicionar</Button>
            </Link>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Criado Em</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.createdAt}</td>
                <td>
                  <Icon.PenFill color="green" />
                  <Link href={`/categorias/${e.id}`}>
                    <Icon.EyeFill />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
