import React, { useState } from 'react';
import { Button, Row, Col, Divider } from 'antd';
import AdvancedInput from '../../components/AdvancedInput/AdvancedInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';


import api from '../../api';

import Logo from '../../assets/logo_menu_retina.png';


export default function Provider() {
  const [company_name, setCompany_name] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cpf, setCpf] = useState("");
  const [state_registration, setState_registration] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");



  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      company_name,
      cpf,
      cnpj,
      state_registration,
      address,
      number,
      complement,
      neighborhood,
      cep,
      city,
      state,
      phone,
      email
    }
    try {
      await api.post('providers', data);
      toast.success('Fornecedor cadastrado com sucesso!!')

    }
    catch (error) {
      if (error === "Error_in_Company Name") {
        toast.error('Porfavor insira a razão social!')
      }
      console.log(error)
    }
  }

  return (
    <>
      <div className="container">
        <Row className="container-navbar">
          <Navbar />
        </Row>
        <Row className="container-body">
          <Col className="sidebar">
            <Sidebar />
          </Col>
          <Col className="content">

          </Col>
        </Row>
      </div>
    </>
  )
}