import React from 'react';
import './styles.css';
import Logo from '../../assets/logo_menu_retina.png'
import Picture from '../../assets/tonio.png'



export default function Sidebar() {
  return (
    <div className="container-sidebar">
      <div className="content-sidebar">
        <div className="container-image">
          <img src={Logo} alt="Logo" className="logo-sidebar" />
        </div>
        <div className="container-footer-sidebar">
          <div className="container-picture">
            <img src={Picture} alt="profile" />
          </div>
          <h2>Toninho Rodrigues</h2>
          <div className="container-button">
            <a href="#">Sair</a>
          </div>
        </div>
      </div>
    </div>
  )
}