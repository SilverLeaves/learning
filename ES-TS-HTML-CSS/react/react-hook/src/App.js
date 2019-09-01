import React,{useState} from 'react';
import './App.css';

import {Button,TabBar} from "antd-mobile"
import "antd-mobile/lib/button/style/css"
import "antd-mobile/lib/tab-bar/style/css"


function App() {

  const [msg,setMsg] =useState("Hello,world!");
  const [currentTab,setCurrentTab] =useState("blueTab");
//   <TabBar.Item
//   title="Life"
//   key="Life"
//   icon={<div style={{
//     width: '22px',
//     height: '22px',
//     background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
//   />
//   }
//   selectedIcon={<div style={{
//     width: '22px',
//     height: '22px',
//     background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
//   />
//   }
//   selected={currentTab === 'blueTab'}
//   badge={1}
//   onPress={() => {
//     setCurrentTab('blueTab')
//   }}
// >
//   {this.renderContent('Life')}
// </TabBar.Item>

  return (
    <div className="App">
     <p>{msg}</p>
        <Button onClick={()=>{setMsg(Math.random())}}>点我</Button>
        <TabBar>
          <TabBar.Item  title="Life" onPress={()=>{setCurrentTab("home")}}  selected={currentTab === 'home'}></TabBar.Item>
          <TabBar.Item  title="explore" onPress={()=>{setCurrentTab("explore")}}  selected={currentTab === 'explore'}></TabBar.Item>
          <TabBar.Item  title="me" onPress={()=>{setCurrentTab("me")}}  selected={currentTab === 'me'}></TabBar.Item>
        </TabBar>
    </div>
  );
}

export default App;
