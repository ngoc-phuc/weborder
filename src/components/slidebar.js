import React, { Component } from 'react';
import './css/slidebar.scss';

class SlideBar extends Component {
  render() {
    return (
      <div className="App">
        <nav className="sidebar" id = "slidebar">
            <ul className="list-group">
                <li >
                    <a className="font-weight-bold list-group-item item menu-item">
                        <i className="fa fa-2x fa-home mr-4"></i>&nbsp;Trang chủ</a>
                </li>
                <li>
                    <a className="font-weight-bold list-group-item  item menu-item" >
                        <i className="fa fa-2x fa-tag mr-4"></i>&nbsp;Sản phẩm</a>
                </li>
                <li>
                    <a className="font-weight-bold list-group-item  item menu-item" >
                        <i className="fa fa-2x fa-address-book mr-4"></i>&nbsp;Khách hàng</a>
                </li>
                <li>
                    <a className="font-weight-bold list-group-item item menu-item" >
                        <i className="fa fa-2x fa-file-text-o mr-4"></i>&nbsp;Đơn hàng</a>
                
                </li>
                <li>
                    <a className="font-weight-bold list-group-item item menu-item" >
                        <i className="fa fa-2x fa-balance-scale mr-2"></i>&nbsp;Bán lẻ</a>
                
                </li>
                <li>
                    <a className="font-weight-bold list-group-item  item menu-item" >
                        <i className="fa fa-2x fa-user mr-4"></i>&nbsp;Thông tin cá nhân</a>
                </li>
                <li>
                    <a className="font-weight-bold list-group-item item menu-item">
                        <i className="fa fa-2x fa-sign-out mr-4"></i>&nbsp;Đăng xuất</a>
                </li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default SlideBar;
