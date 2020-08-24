import React from 'react';
import { Input, Dropdown, Button } from 'antd';


export default function Provider() {
  return (
    <div className="provider_container">
      <div className="provider_title">
        <h1>Cadastro de fornecedores</h1>
      </div>
      <form className="provider_form">
        <div className="provider_form_input">
          <label>Razão social</label>
          <Input placeholder="Solteiro" />
        </div>
        <div className="provider_form_input">
          <label>CNPJ/CPF</label>
          <Input placeholder="508.127.628-60" />
          <label>I.E</label>
          <Input placeholder="508.127.628-60" />
        </div>
        <div className="provider_form_input">
          <label>Endereço</label>
          <Input placeholder="Av Marechal Rondon" />
        </div>
        <div className="provider_form_input">
          <label>Número</label>
          <Input placeholder="2044" />
          <label>Complemento</label>
          <Input placeholder="apto 33" />
        </div>
        <div className="provider_form_input">
          <label>Bairro</label>
          <Input placeholder="Jardin Chapadão" />
          <label>CEP</label>
          <Input placeholder="13070-172" />
        </div>
        <div className="provider_form_input">
          <label>Munícipio</label>
          <Input placeholder="Campinas" />
          <Dropdown placement="bottomLeft" arrow>
            <Button>UF</Button>
          </Dropdown>
        </div>
        <div className="provider_form_input">
          <label>Fone</label>
          <Input placeholder="(19) 99755-2541" />
          <label>E-mail</label>
          <Input placeholder="lucas.araujo@mblabs.com" />
        </div>
        <div className="provider_form_button">
          <Button type="primary">Procurar</Button>
          <Button type="primary">Incluir</Button>
          <Button type="primary" danger>Excluir</Button>
          <Button type="primary">Salvar</Button>

        </div>
      </form>
    </div>
  )
}