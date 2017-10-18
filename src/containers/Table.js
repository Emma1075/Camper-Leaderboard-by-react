import React from 'react'
import THeader from './THeader';
import User from '../conponents/User';
import {getAll100} from "../fetch/getDatas";

import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: null
        };

        this.handleDatas = this.handleDatas.bind(this);
    }

    componentWillMount() {
        this._setInitData();
    }

    _setInitData() {
        let result = getAll100();
        this._handleResult(result);
    }

    _handleResult(result) {
        result.then(res => {
            return res.json();
        }).then(datas => {
            this.setState({datas})
        })
    }

    handleDatas(value) {
        this.setState({
            datas: value
        })
    }

    render() {
        return (
           <table className="table">
               <THeader datas={this.handleDatas}/>
               <tbody>
               {this.state.datas && this.state.datas.map((data,i) => {
                   return <User num={i+1} key={i} user={data} />
               })}
               </tbody>
           </table>
        );
    }
}

export default Table