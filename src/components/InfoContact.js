import React, { Component } from 'react';

class InfoContact extends Component {
    render() {
        let _data = this.props.items;
        return (
            <div className="infoBlock">
            {_data.map(function(it, i){
               return <div className="wrapInfo" key={i}>
                          {[ <p className="listInfo" key={i}>{it.title}</p>]}
                          {[ <span className="dataInfo" key={i}>{it.data}</span>]}
                      </div>;
             })}
            </div>
        );
    }
}

export default InfoContact;

// { _data.map((it) =>
//     <div className="wrapInfo">
//     <p className="listInfo">{it.title}</p>
//     <span className="dataInfo">{it.data}</span>
//     </div>
// )}
