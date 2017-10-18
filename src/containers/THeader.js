import React from 'react'
import {getLatest30, getAll100} from '../fetch/getDatas'

import './THeader.css'

class THeader extends React.Component {
    constructor() {
        super();
        this.state = {
            datas: []
        };
        this.handleLatest = this.handleLatest.bind(this);
        this.handleAll = this.handleAll.bind(this);
    }

    handleLatest() {
        let result = getLatest30();
        this._handleResult(result);
    }

    handleAll() {
        let result = getAll100();
        this._handleResult(result);
    }

    _handleResult(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log('handle json =>', json)
            this.setState({
                datas: json
            }, () => this.props.datas(this.state.datas))
        }).catch(ex => {
            console.error('获取信息出错！')
        })
    }

    render() {
        return (
            <thead className="theader">
                <tr>
                    <td>#</td>
                    <td>Camper Name</td>
                    <td className="sort" onClick={this.handleLatest}><a href="#">Points in past 30 days</a></td>
                    <td className="sort" onClick={this.handleAll}><a href="#">All time points</a></td>
                </tr>
            </thead>
        );
    }
}

export default THeader