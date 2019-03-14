import React, { Component } from 'react';
import './css/header-user-menu.scss';

class HeaderUser extends Component {
  render() {
    return (
      <div >
        <li className="nav-item ml-auto">
            <span className=" form-inline">
                <img  width="30" height="30" className="d-inline-block img-user" src={ require('./images/no-avatar.png') }/>
                <span className="ml-2 mt-1 mr-1 font-">
                    <span className="font-weight-bold">Bùi Thị Ngọc Phúc</span>
                    <div className="small">Nhân viên bán hàng</div>
                </span>
            </span>
        </li>
      </div>
    );
  }
}

export default HeaderUser;
