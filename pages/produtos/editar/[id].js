import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import ProductImg from "../../../public/imgs/produto.jpg";
import categoryService from "../../../components/services/category.service";
import productService from "/components/services/product.service";
import { useRouter } from "next/router";

export default function EditarProduto() {
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    categoryService.getCategories().then((i) => setCategoryList(i));
    if(id) {
      productService.getProduct(id).then((r) => {
        setName(r.name);
        setPrice(r.price);
        setCategory(r.category);
      })
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const produto = await productService.updateProduct({
      name,
      price,
      category,
    }, id);
    if(produto.id){
      alert("Produto editado com sucesso!")
      router.push("/produtos");
    }else{
      alert("Falha ao editar o produto, tente novamente")
    }
  }

  return (
    <Container className="p-2">
      <Card className="p-2">
        <Form onSubmit={handleSubmit}>
          <h2> Editar Produto</h2>
          <Form.Group className="p-2">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="insira o nome do produto"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="p-2">
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              placeholder="insira o preço do produto"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="p-2">
            <Form.Label>Preço</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Escolha uma categoria</option>
              {categoryList.map((e) => 
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="p-2 text-center">
            <Button type="submit">Editar</Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}
