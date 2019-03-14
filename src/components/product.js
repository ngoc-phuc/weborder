import React, { Component } from 'react';
import './css/product.scss';

class Product extends Component {
    
  render() {
    return (
        <div className="product" id = "product">
            <body class="news">
                <div class="d-flex justify-content-around menu text-uppercase">
                    <div class="menu-item d-flex justify-content-around product-type">
                        <a >THÀNH PHẨM</a>
                    </div>
                    <div class="menu-item d-flex justify-content-around product-type">
                        <a >THIẾT BỊ</a>
                    </div>
                </div>
            </body>
            <div class="d-flex mb-5">
                <input  class="form-control search-box" placeholder="Tìm kiếm theo mã sản phẩm, tên sản phẩm, mô tả"/>
            </div>
        </div>
    );
  }
}

export default Product;