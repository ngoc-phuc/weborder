import React, { Component } from 'react';
import './css/header.scss';
import Header from './header';
import SlideBar from './slidebar';
import Product from './product';

class Home extends Component {
    changeWidth() {
        var slb = document.getElementById("slidebar");
        var pro = document.getElementById("product")
        var width = slb.offsetWidth;
        if(width === 200){
            slb.style.width = '70px';
            pro.style.marginLeft = '70px'
        }
        else{
            slb.style.width = '200px';
            pro.style.marginLeft = '200px'
        }
        }
  render() {
    return (
      <div className="App">
        <Header changeWidth={this.changeWidth}></Header>
        <SlideBar ></SlideBar>
        <Product ></Product>
      </div>
    );
  }
}

export default Home;

