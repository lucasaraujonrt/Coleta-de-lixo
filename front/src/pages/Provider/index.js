import React from 'react';
import {  Select, Button, Row, Col, Divider } from 'antd';
import AdvancedInput from '../../components/AdvancedInput'
import './styles.scss'

const { Option } = Select;

export default function Provider({ children }) {
  return (
    <div className="provider_container">
      <div className="provider_container__title">
        <h1 className="provider_container__title">Cadastro de fornecedores</h1>
        
      </div>

      <Divider style={{borderWidth:2,borderColor:"white"}}/>
      
      <form className="provider-form">
        <div className="provider-form__input">
          <Row gutter={16}>
            <Col sm={24} xs={24} md={24} lg={22}>
              <AdvancedInput label="Razão social" placeholder="Nome" maxLength={40} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col sm={12} xs={12} md={12} lg={11}>
              <AdvancedInput label="CNPJ/CPG" placeholder="508.127.628-60" maxLength={20} />
            </Col>
            <Col sm={12} xs={12} md={12} lg={11}>
              <AdvancedInput label="I.E" placeholder="508.127.628-60" maxLength={20} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>

            <Col sm={12} xs={12} md={12} lg={6}>
              <AdvancedInput label="CEP" placeholder="13070-172" maxLength={9} />
            </Col>

            <Col sm={12} xs={12} md={12} lg={16}>
              <AdvancedInput label="Endereço" placeholder="Av Marechal Rondon" maxLength={40} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col sm={8} xs={8} md={6} lg={4}>
              <AdvancedInput label="Número" placeholder="2044" maxLength={10} />
            </Col>
            <Col sm={8} xs={8} md={12} lg={14}>
              <AdvancedInput label="Bairro" placeholder="Jardin Chapadão" maxLength={40} />
            </Col>
            <Col sm={8} xs={8} md={6} lg={4}>
              <AdvancedInput label="Complemento" placeholder="apto 33" maxLength={20} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col sm={18} xs={18} md={15} lg={14}>
              <AdvancedInput label="Munícipio" placeholder="Campinas" maxLength={40} />
            </Col>
            <Col sm={6} xs={6} md={9} lg={8}>
                <Select className="provider-form__input__select" defaultValue="Escolha uma opção">
                  <Option value="AC">AC</Option>
                  <Option value="AL">AL</Option>
                  <Option value="AP">AP</Option>
                  <Option value="AM">AM</Option>
                  <Option value="BA">BA</Option>
                  <Option value="CE">CE</Option>
                  <Option value="ES">ES</Option>
                  <Option value="GO">GO</Option>
                  <Option value="MA">MA</Option>
                  <Option value="MT">MT</Option>
                  <Option value="MS">MS</Option>
                  <Option value="MG">MG</Option>
                  <Option value="PA">PA</Option>
                  <Option value="PB">PB</Option>
                  <Option value="PR">PR</Option>
                  <Option value="PE">PE</Option>
                  <Option value="PI">PI</Option>
                  <Option value="RJ">RJ</Option>
                  <Option value="RN">RN</Option>
                  <Option value="RS">RS</Option>
                  <Option value="RO">RO</Option>
                  <Option value="RR">RR</Option>
                  <Option value="SC">SC</Option>
                  <Option value="SP">SP</Option>
                  <Option value="SE">SE</Option>
                  <Option value="TO">TO</Option>
                  <Option value="DF">DF</Option>
                </Select>
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col sm={12} xs={12} md={12} lg={11}>
              <AdvancedInput label="Telefone" placeholder="(19) 99755-2541" maxLength={14} />
            </Col>
            <Col sm={12} xs={12} md={12} lg={11}>
              <AdvancedInput label="E-mail" placeholder="lucas.araujo@mblabs.com" maxLength={40} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__button">
          <Row gutter={16} justify="space-around">
            <Col sm={4} xs={8} md={8} lg={4}>
              <Button type="primary" danger className="provider-form__button__delete">
                Excluir
              </Button>
            </Col>
            <Col sm={4} xs={8} md={8} lg={4}>
              <Button type="primary" className="provider-form__button__search">Procurar</Button>
            </Col>
            <Col sm={4} xs={8} md={8} lg={4}>
              <Button type="primary" className="provider-form__button__include">Incluir</Button>
            </Col>
           
          </Row>
        </div>
      </form>
    </div>
  )
}