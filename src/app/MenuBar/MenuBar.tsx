import { Button, Menu, Switch } from 'antd'
import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from '@ant-design/icons'

const MenuBar: () => JSX.Element = () => {
  const [MenuOpen, setMenuOpen] = useState<boolean>(true)
  const [Theme, setTheme] = useState<"dark" | "light">('dark')
  return <div style={{ width: 256 }}>
    <Button type="primary" onClick={() => setMenuOpen(!MenuOpen)} style={{ marginBottom: 16 }}>
      {React.createElement(!MenuOpen ? MenuUnfoldOutlined : MenuFoldOutlined)}
    </Button>
    <Switch
      checked={Theme === 'dark'}
      onChange={() => setTheme(Theme === 'dark' ? 'light' : 'dark')}
      checkedChildren="Dark"
      unCheckedChildren="Light"
    />
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme={Theme}
      inlineCollapsed={MenuOpen}
    >
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Translation
      </Menu.Item>
      <Menu.Item key="2" icon={<PieChartOutlined />}>
        <span>Flashcards</span>
        <span style={{ background: "red", marginLeft: 30 }}>Comig soon</span>
      </Menu.Item>
    </Menu>
  </div>
}

export default MenuBar