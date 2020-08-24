import React from 'react';
import { Input, Dropdown, Button, Row, Col, Divider } from 'antd';
import './styles.scss'


export default function Provider() {
  return (
    <div className="provider_container">
      <div className="provider_container__title">
        <h1>Cadastro de fornecedores</h1>
      </div>

      <Divider />

      <form className="provider-form">
        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <label>Razão social</label>
              <Input placeholder="Solteiro" />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <label>CNPJ/CPF</label>
              <Input placeholder="508.127.628-60" />
            </Col>
            <Col span={8}>
              <label>I.E</label>
              <Input placeholder="508.127.628-60" />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <label>Endereço</label>
              <Input placeholder="Av Marechal Rondon" />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <label>Número</label>
              <Input placeholder="2044" />
            </Col>
            <Col span={8}>
              <label>Complemento</label>
              <Input placeholder="apto 33" />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <label>Bairro</label>
              <Input placeholder="Jardin Chapadão" />
            </Col>
            <Col span={8}>
              <label>CEP</label>
              <Input placeholder="13070-172" />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <label>Munícipio</label>
              <Input placeholder="Campinas" />
            </Col>
            <Col span={8}>
              <Dropdown placement="bottomLeft" arrow>
                <Button>UF</Button>
              </Dropdown>
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <label>Fone</label>
              <Input placeholder="(19) 99755-2541" />
            </Col>
            <Col span={8}>
              <label>E-mail</label>
              <Input placeholder="lucas.araujo@mblabs.com" />
            </Col>
          </Row>
        </div>

        <div className="provider-form__button">
          <Row gutter={16}>
            <Col span={6}>
              <Button type="primary" className="provider-form__button__search">Procurar</Button>
            </Col>
            <Col span={6}>
              <Button type="primary" className="provider-form__button__include">Incluir</Button>
            </Col>
            <Col span={6}>
              <Button type="primary" danger className="provider-form__button__delete">
                Excluir
              </Button>
            </Col>
            <Col span={6}>
              <Button type="primary" className="provider-form__button__save">Salvar</Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>
  )
}