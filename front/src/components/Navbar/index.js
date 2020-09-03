
import React from 'react';
import './styles.css';


class Navbar extends React.Component {
  render() {
    return (
      <div className="container-navbar">
        <div className="container-content">
          <div className="container-item active">
            Listas
          </div>
          <div className="container-item">
            Notas fiscais
          </div>
          <div className="container-item">
            Produção
          </div>
          <div className="container-item">
            Relatórios
          </div>
          <div className="container-item">
            Configurações
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;