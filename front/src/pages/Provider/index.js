import React from 'react';
import { Input, Dropdown, Button, Row, Col, Divider } from 'antd';
import AdvancedInput from '../../components/AdvancedInput'
import './styles.scss'


export default function Provider({ children }) {
  return (
    <div className="provider_container">
      <div className="provider_container__title">
        <h1>Cadastro de fornecedores</h1>
      </div>

      <Divider style={{ color: "#FFF" }} />

      <form className="provider-form">
        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={16}>
              <AdvancedInput label="Razão social" placeholder="Solteiro" maxLength={40} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <AdvancedInput label="CNPJ/CPG" placeholder="508.127.628-60" maxLength={20} />
            </Col>
            <Col span={8}>
              <AdvancedInput label="I.E" placeholder="508.127.628-60" maxLength={20} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <AdvancedInput label="Endereço" placeholder="Av Marechal Rondon" maxLength={40} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <AdvancedInput label="Número" placeholder="2044" maxLength={10} />
            </Col>
            <Col span={8}>
              <AdvancedInput label="Complemento" placeholder="apto 33" maxLength={20} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <AdvancedInput label="Bairro" placeholder="Jardin Chapadão" maxLength={40} />
            </Col>
            <Col span={8}>
              <AdvancedInput label="CEP" placeholder="13070-172" maxLength={9} />
            </Col>
          </Row>
        </div>

        <div className="provider-form__input">
          <Row gutter={16}>
            <Col span={8}>
              <AdvancedInput label="Munícipio" placeholder="Campinas" maxLength={40} />
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
              <AdvancedInput label="Telefone" placeholder="(19) 99755-2541" maxLength={14} />
            </Col>
            <Col span={8}>
              <AdvancedInput label="E-mail" placeholder="lucas.araujo@mblabs.com" maxLength={40} />
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
          </Row>
        </div>
      </form>
    </div>
  )
}