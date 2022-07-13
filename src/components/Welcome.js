
import { Tabs } from 'antd';
import '../css/styles.css';
import React from 'react';
import People from './Name';
import Skills from './Skills'
import Contacto from './Contact'
import Portafolio from './portafolio';

const { TabPane } = Tabs;

const colore = {
  border: "none",
}

const App = () => (
  <Tabs styles={colore} defaultActiveKey="1" centered>
    <TabPane tab="About me" key={1}>
      <People />
    </TabPane>
    <TabPane tab="Skills" key={2}>
      <Skills />
    </TabPane>
    <TabPane tab="Portfolio" key={3}>
      <Portafolio/>
    </TabPane>
    <TabPane tab="Contact" key={4}>
      <Contacto />
    </TabPane>
  </Tabs>
);

export default App;