import React, { Component } from 'react';

class InfoSkill extends Component {
    render() {
        let _data = this.props.skills;
        return (
            <div className="infoSkill">
            {
                _data.map((it, k) =>
                    <div className={it.title + ' itemSkill'}>
                        {[ <div className="wrapTitleSkill" key={k}>
                            <p>{it.title}</p>
                        </div> ]}
                        {[ <div className="wrapDataSkill" key={k}>
                            {[...new Array(10)].map((x, i) =>
                                i < it.lvl ? (<span className="dataSkill"></span>) : (<span className="dataSkill"></span>)
                            )}
                        </div> ]}
                    </div>
                )}
            </div>
        );
    }
}

export default InfoSkill;

// {_data.map(function(it, i){
//    return <div className="wrapInfo" key={i}>
//               {[ <p className="listInfo" key={i}>{it.title}</p>]}
//               {[ <span className="dataInfo" key={i}>{it.data}</span>]}
//           </div>;
//  })}
