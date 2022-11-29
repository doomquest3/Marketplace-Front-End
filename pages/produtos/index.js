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
import ItemTable from "../../components/ItemTable";

export default function produtos() {
  const data = [];

  for(let i=0; i<10;i++){
    const hoje = new Date();
    data.push({
      image: "image",
      name: `produtos ${i}` ,
      category: `categoria ${i}`,
      price: `R$ ${1}.95`,
      createdAt: hoje.toLocaleDateString(),
      id: 1,
    })
  
  };

  

  const headers = ["FOTO", "NOME", "CATEGORIA",
  "PREÇO", "CRIADO EM:", "AÇÕES"];

  return (
    <>
      <Card className="m-md-5 p-md-2">
        <h2 className="text-center">Produtos</h2>
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
            <Link href={"/produtos/cadastrar"}>
              <Button>Adicionar</Button>
            </Link>
          </Col>
        </Row>
      </Card>
      <ItemTable data={data} header={headers} detailLink="produtos"/>
    </>
  );
}
