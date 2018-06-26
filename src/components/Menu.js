import React, { Component } from 'react';

class Menu extends Component {
    render() {
      return (
        <div className="menu">
            {
                this.props.items.map((item, index) =>
                <li key={index} className="listMenu">
                    <a href='#' className="linkMenu">{item.link}</a>
                </li>
            )}
        </div>
      );
    }
}

export default Menu;
