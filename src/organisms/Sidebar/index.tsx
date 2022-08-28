import React, { useState } from 'react';
import {
  IoBalloonOutline
  // FaBars,
  /// FaUserAlt,
  /// FaRegChartBar,
  /// FaCommentAlt,
  /// FaShoppingBag,
  /// FaThList
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { SidebarStyled } from './Sidebar.styles';
import Logo from '@/assets/logo.png';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Home',
      icon: <IoBalloonOutline />
    },
    {
      path: '/citizens',
      name: 'Citizens',
      icon: <IoBalloonOutline />
    }
  ];

  return (
    <SidebarStyled>
      <div className="top_section">
        <h3>CiafWeb</h3>

        {/* <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
        </div> */}
      </div>

      <nav className="nav">
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="menu-item">
            <div className="icon">{item.icon}</div>
            <div className="text">{item.name}</div>
          </NavLink>
        ))}
      </nav>
    </SidebarStyled>
  );
}

export default Sidebar;
