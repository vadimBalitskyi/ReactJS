import React, { Component } from 'react';
import { listInfo } from './Contact';

class InfoFooter extends Component {
    render() {
        return  (
            <div className="infoFooter">
                {
                    listInfo.map((item, index) =>
                    <li key={index} className="listFooter">{item.title}
                        <span className="dataFooter">{item.data}</span>
                    </li>
                )}
            </div>
        );
    }
}

export default InfoFooter;
