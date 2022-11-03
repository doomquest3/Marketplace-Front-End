
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

export default function ItemTable(props){
    
    if(!props.data) return <>sem itens cadastrados</>;

    return (
    <>
        <Table>
        <thead>
            <tr>
            {props.headers.map((e)=>(
                <th key={e} >{e}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {propos.data.map((e) => (
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
    </>
   );
}