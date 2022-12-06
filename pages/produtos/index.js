/* eslint-disable react-hooks/rules-of-hooks */
import { setRevalidateHeaders } from "next/dist/server/send-payload";
import Link from "next/link";
import { useEffect, useState } from "react";
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
import productService from "../../services/product.service";

export default function Produtos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    productService.getProducts().then((r) => {
      console.log(r);
      setData(r);
    });
  }, []);

  const headers = ["FOTO", "NOME", "CATEGORIA", "PREÇO", "CRIADO EM:", "AÇÕES"];

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
      <ItemTable data={data} header={headers} detailLink="produtos" />
    </>
  );
}
