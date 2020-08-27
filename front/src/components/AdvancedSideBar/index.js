import React, { useState } from 'react';
import { Menu } from 'antd';
import logo from '../../assets/logo_menu_retina.png'

const { Sider } = Menu;

export default function AdvancedSideBar() {
  const [state, setState] = useState(false);

  function onCollapse() {
    if (state === true) {
      setState(false)
    } else {
      setState(true)
    }
  }

  return (
    <div>
      <Sider style={{ minHeight: '100vh' }} collapsible collapsed={state} onCollapse={onCollapse}>
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
        <Menu className="menu" theme="light" mode="inline">
          <Menu.Item>
            foto aqui
          </Menu.Item>
          <Menu.Item>
            Mariana Araujo
          </Menu.Item>
          <Menu.Item onClick={() => { }}>
            Sair
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  )
}