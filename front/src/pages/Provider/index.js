import React, { useState } from 'react';
import { Button, Row, Col, Divider } from 'antd';
import AdvancedInput from '../../components/AdvancedInput/AdvancedInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';
import api from '../../api';
// import AdvancedSideBar from '../../components/AdvancedSideBar'

export default function Provider() {
  const [social, setSocial] = useState("");
  const [documents, setDocuments] = useState("");
  const [ie, setIe] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState();
  const [complements, setComplements] = useState("");
  const [district, setDistrict] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");



  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      social,
      documents,
      ie,
      address,
      number,
      complements,
      district,
      cep,
      city,
      uf,
      phone,
      email
    }
    try {
      await api.post('providers', data);
    }
    catch{
      toast.error('Erro ao cadastrar fornecedor, tente novamenta mais tarde');
    }
  }

  return (
    <>
      {/* <AdvancedSideBar /> */}
      <div className="provider_container">
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
        <div className="provider_container__title">
          <h1 className="provider_container__title">Cadastro de fornecedores</h1>
        </div>

        <Divider style={{ borderWidth: 2, borderColor: "white" }} />

        <form className="provider-form" onSubmit={handleSubmit}>
          <div className="provider-form__input">
            <Row gutter={16}>
              <Col sm={24} xs={24} md={24} lg={22}>
                <AdvancedInput
                  label="Razão social"
                  placeholder="Nome"
                  value={social}
                  onChange={e => setSocial(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <Col sm={12} xs={12} md={12} lg={11}>
                <AdvancedInput
                  label="CPF"
                  mask="999.999.999-99"
                  value={documents}
                  onChange={e => setDocuments(e.target.value)}
                />
              </Col>
              <Col sm={12} xs={12} md={12} lg={11}>
                <AdvancedInput
                  label="CNPJ"
                  mask="99.999.999/9999-99"
                  value={documents}
                  onChange={e => setDocuments(e.target.value)}
                />
              </Col>
              <Col sm={12} xs={12} md={12} lg={11}>
                <AdvancedInput
                  label="I.E"
                  placeholder="508.127.628-60"
                  value={ie}
                  onChange={e => setIe(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>

              <Col sm={12} xs={12} md={12} lg={6}>
                <AdvancedInput
                  label="CEP"
                  mask="99999-999"
                  placeholder="13070-172"
                  value={cep}
                  onChange={e => setCep(e.target.value)}
                />
              </Col>

              <Col sm={12} xs={12} md={12} lg={16}>
                <AdvancedInput
                  label="Endereço"
                  placeholder="Av Marechal Rondon"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <Col sm={8} xs={8} md={6} lg={4}>
                <AdvancedInput
                  label="Número"
                  placeholder="2044"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />
              </Col>
              <Col sm={8} xs={8} md={12} lg={14}>
                <AdvancedInput
                  label="Bairro"
                  placeholder="Jardin Chapadão"
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                />
              </Col>
              <Col sm={8} xs={8} md={6} lg={4}>
                <AdvancedInput
                  label="Complemento"
                  placeholder="apto 33"
                  value={complements}
                  onChange={e => setComplements(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <Col sm={18} xs={18} md={15} lg={14}>
                <AdvancedInput
                  label="Munícipio"
                  placeholder="Campinas"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </Col>
              <Col sm={6} xs={6} md={9} lg={8}>
                <AdvancedInput
                  label="UF"
                  value={uf}
                  onChange={e => setUf(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <Col sm={12} xs={12} md={12} lg={11}>
                <AdvancedInput
                  label="Telefone"
                  placeholder="(19) 99755-2541"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </Col>
              <Col sm={12} xs={12} md={12} lg={11}>
                <AdvancedInput
                  label="E-mail"
                  placeholder="lucas.araujo@mblabs.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__button">
            <Row gutter={16} justify="space-around">
              <Col sm={4} xs={8} md={8} lg={4}>
                <Button type="submit" className="provider-form__button__delete">
                  Excluir
              </Button>
              </Col>
              <Col sm={4} xs={8} md={8} lg={4}>
                <Button
                  type="submit"
                  className="provider-form__button__search"
                >
                  Procurar
                </Button>
              </Col>
              <Col sm={4} xs={8} md={8} lg={4}>
                <Button type="submit" className="provider-form__button__include">Incluir</Button>
              </Col>
            </Row>
          </div>
        </form>
      </div>
    </>
  )
}