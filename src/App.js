import React from 'react';
import Barang from './Component/Baju';
import DetailProduct from './Component/BajuDetail';
import GambarDetail from './Component/GBajuDetail';
import 'antd/dist/antd.css';
import { Layout, Typography, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

class App extends React.Component {
  state = {
    komponenMuncul : false
  }
  
  ubahKomponenMuncul = () => {
    this.setState((state) => {
        return {komponenMuncul : !this.state.komponenMuncul}
    })
  }
  
  state = {
  komponenGambar : false
  }
  
  ubahKomponenGambar = () => {
    this.setState((state) => {
      return {komponenGambar : !this.state.komponenGambar}
    })
  }
  
  componentDidMount() {
    alert(`yakin ingin membuka website ERIGO STORE?`)
  }

  render() {
    return (
      <Layout style={{background:'#FFDAB9'}}>
        <Header style={{background:'#CD853F', justifyContent:'space-between', display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '20px 40px'}}>
          <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '25px'}}>
          ERIGO STORE
          </Text>
          <Text style={{fontFamily:'Roboto', color:'#FFFFFF', fontSize: '15px', margin: '0px'}}>
          Log In
          </Text>
        </Header>
        <Content style={{textAlign:'center', display: 'inline-block'}}>
          <Barang />
          <div style={{Align:'center', display: 'inline-block'}}>
            <div style={{margin:'10px'}}>
              <Button Align="center" type="danger" onClick={this.ubahKomponenGambar}>{this.state.komponenGambar ? 'Hide' : 'View'} Details Picture!</Button>
              {this.state.komponenGambar ? <GambarDetail/> : ''}
            </div>
            <Button Align="center" type="danger" onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'Hide' : 'View'} Details Products!</Button>
            {this.state.komponenMuncul ? <DetailProduct/> : ''}
          </div>
        </Content>
        <Footer style={{background:'#CD853F', textAlign:'center', width:'100%', fontFamily:'Roboto', color:'#FFFFFF'}}>
          KELOMPOK 31 - Azzah - Caerel
        </Footer>
      </Layout>
    )
  }
}

export default App;