import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class Barang extends Component {
    state = {
            angka:0
        }

    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (this.state.angka !== nextState.angka) {
        if (nextState.angka >5){
            alert(`Stock Habis`)
            return false
        }
        window.confirm('Anda yakin ingin menambahkan Erigo ke Cart?')
        return true
    }
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Erigo anda berhasil ditambahkan ke Cart`)
    }

    render() {
        return (
            <div style={{textAlign:'center', display: 'inline-block' }}>
            <Card hoverable style={{display: 'inline-block', width:350, margin:'30px', boxShadow:'0px 1px 1px'}} 
            cover={<img alt="gambar1" height="500px" src="https://res.cloudinary.com/dn7ckecqn/image/upload/v1631779800/bahan/2_nxmz3q.jpg" />}>
            <Meta title="Erigo T-Shirt Have Sun Navy" description="Rp 62.000" />
            <div>
            <Button type="success" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                Add to Cart
            </Button>
            </div>
            <Text>Total cart : {this.state.angka}</Text>
            </Card>
            </div>
        );
    }
}

export default Barang;