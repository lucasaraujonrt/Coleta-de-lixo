import React, { useState } from 'react';
import { Button, Row, Col, Divider } from 'antd';
import AdvancedInput from '../../components/AdvancedInput/AdvancedInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';
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
    try {
      await api.post('providers', data);
      toast.success('Fornecedor cadastrado com sucesso!!')

    }
    catch (error) {
      console.log(error)
      toast.error('Erro ao cadastrar fornecedor, tente novamenta mais tarde!!');
    }
  }

  return (
    <>
      <div className="provider-container">
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
        <div className="provider-container__title">
          <h1 className="provider-container__title">Cadastro de fornecedores</h1>
        </div>

        <Divider style={{ borderWidth: 2, borderColor: "white" }} />

        <form className="provider-form" onSubmit={handleSubmit}>
          <div className="provider-form__input">
            <Row gutter={16}>
              <Col sm={24} xs={24} md={24} lg={22}>
                <AdvancedInput
                  label="Razão social"
                  placeholder="Nome"
                  value={company_name}
                  onChange={e => setCompany_name(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <div style={{ display: "flex", justifyContent: 'space-around' }}>
                <Col span={8}>
                  <AdvancedInput
                    label="CPF"
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </Col>
                <Col span={8} >
                  <AdvancedInput
                    label="CNPJ"
                    mask="99.999.999/9999-99"
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}
                  />
                </Col>
                <Col span={8} >
                  <AdvancedInput
                    label="I.E"
                    placeholder="508.127.628-60"
                    value={state_registration}
                    onChange={e => setState_registration(e.target.value)}
                  />
                </Col>
              </div>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <div style={{ display: "flex", justifyContent: 'space-around' }}>
                <Col span={12} >
                  <AdvancedInput
                    label="CEP"
                    mask="99999-999"
                    placeholder="13070-172"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                  />
                </Col>
                <Col span={12}>
                  <AdvancedInput
                    label="Endereço"
                    placeholder="Av Marechal Rondon"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                  />
                </Col>
              </div>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <div style={{ display: "flex", justifyContent: 'space-around' }}>
                <Col span={8}>
                  <AdvancedInput
                    label="Número"
                    placeholder="2044"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                  />
                </Col>
                <Col span={8}>
                  <AdvancedInput
                    label="Bairro"
                    placeholder="Jardin Chapadão"
                    value={neighborhood}
                    onChange={e => setNeighborhood(e.target.value)}
                  />
                </Col>
                <Col span={8}>
                  <AdvancedInput
                    label="Complemento"
                    placeholder="apto 33"
                    value={complement}
                    onChange={e => setComplement(e.target.value)}
                  />
                </Col>
              </div>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <Col span={12}>
                <AdvancedInput
                  label="Munícipio"
                  placeholder="Campinas"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </Col>
              <Col span={12}>
                <AdvancedInput
                  label="UF"
                  value={state}
                  onChange={e => setState(e.target.value)}
                />
              </Col>
            </Row>
          </div>

          <div className="provider-form__input">
            <Row gutter={16}>
              <Col span={12}>
                <AdvancedInput
                  label="Telefone"
                  mask="(99) 99999-9999"
                  placeholder="(19) 99755-2541"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </Col>
              <Col span={12}>
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
            <Button type="submit" className="provider-form__button__search">
              Procurar
            </Button>
            <button type="submit" className="provider-form__button__include">
              Incluir
            </button>
            <Button type="submit" className="provider-form__button__delete">
              Excluir
            </Button>
            <Button type="submit" className="provider-form__button__save">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}