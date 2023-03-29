import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header> </Header>
        <Content> </Content>
        <Footer> </Footer>
      </div>
    );
  }
}

export default App;
