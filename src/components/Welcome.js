import { Tabs } from 'antd';
import '../css/styles.css';
import React from 'react';
import People from './Name';
import Skills from './Skills'
import Contacto from './Contact'
const { TabPane } = Tabs;

const colore = {
  border: "none",

}

const App = () => (
  <Tabs styles={colore} defaultActiveKey="1" centered>
    <TabPane tab="Sobre mí" key={1}>
      <People />
    </TabPane>
    <TabPane tab="Skills" key={2}>
      <Skills />
    </TabPane>
    <TabPane tab="Portafolio" key={3}>
      contenido Portafolio
    </TabPane>
    <TabPane tab="Contacto" key={4}>
    <Contacto/>
    </TabPane>
  </Tabs>
);

export default App;