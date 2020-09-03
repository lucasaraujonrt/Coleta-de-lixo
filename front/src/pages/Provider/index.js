import React, { useState } from 'react';
import { Row, Col } from 'antd';
import AdvancedInput from '../../components/AdvancedInput/AdvancedInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

import api from '../../api';

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


    await api.post('providers', data).then(response => {
      toast.success('Fornecedor cadastrado com sucesso!');
    }).catch(error => {
      toast.error(error.response.data);
    });
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <Row className="container-navbar">
          <Navbar />
        </Row>
        <Row className="container-body">
          <Col className="sidebar">
            <Sidebar />
          </Col>
          <Col className="content">
            <div className="container-title">
              <h1>Cadastro de Fornecedores</h1>
            </div>
            <div className="container-form">
              <form onSubmit={handleSubmit}>
                <div className="form-top">
                  <Row gutter={16} className="mtRow">
                    <Col span={24}>
                      <AdvancedInput label="Razão social:" onChange={e => setCompany_name(e.target.value)} value={company_name} />
                    </Col>
                  </Row>
                  <Row gutter={16} className="mtRow">
                    <Col span={8}>
                      <AdvancedInput label="CNPJ:" onChange={e => setCnpj(e.target.value)} value={cnpj} mask="99.999.999/9999-99" />
                    </Col>
                    <Col span={8}>
                      <AdvancedInput label="CPF:" onChange={e => setCpf(e.target.value)} value={cpf} mask="999.999.99-99" />
                    </Col>
                    <Col span={8}>
                      <AdvancedInput label="I.E:" onChange={e => setState_registration(e.target.value)} value={state_registration} />
                    </Col>
                  </Row>
                  <Row gutter={16} className="mtRow">
                    <Col span={12}>
                      <AdvancedInput label="Email:" onChange={e => setEmail(e.target.value)} value={email} />
                    </Col>
                    <Col span={12}>
                      <AdvancedInput label="Telefone:" onChange={e => setPhone(e.target.value)} value={phone} />
                    </Col>
                  </Row>
                  <Row gutter={16} className="mtRow">
                    <Col span={12}>
                      <AdvancedInput label="Endereço:" onChange={e => setAddress(e.target.value)} value={address} />
                    </Col>
                    <Col span={12}>
                      <AdvancedInput label="Número:" onChange={e => setNumber(e.target.value)} value={number} />
                    </Col>
                  </Row>
                  <Row gutter={16} className="mtRow">
                    <Col span={12}>
                      <AdvancedInput label="Bairro:" onChange={e => setNeighborhood(e.target.value)} value={neighborhood} />
                    </Col>
                    <Col span={12}>
                      <AdvancedInput label="Complemento:" onChange={e => setComplement(e.target.value)} value={complement} />
                    </Col>
                  </Row>
                  <Row gutter={16} className="mtRow">
                    <Col span={8}>
                      <AdvancedInput label="CEP:" onChange={e => setCep(e.target.value)} value={cep} mask="99999-999" />
                    </Col>
                    <Col span={8}>
                      <AdvancedInput label="Municipio:" onChange={e => setCity(e.target.value)} value={city} />
                    </Col>
                    <Col span={8}>
                      <AdvancedInput label="UF:" onChange={e => setState(e.target.value)} value={state} />
                    </Col>
                  </Row>
                </div>
                <div className="form-bottom">
                  <button type="submit" className="button-delete">
                    Cancelar
                  </button>
                  <button type="submit" className="button-include">
                    Adicionar
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}