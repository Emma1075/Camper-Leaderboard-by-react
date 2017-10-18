import React from 'react'
import Table from './Table'
import './Main.css'

class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <div className="row">
                    <div className="col-lg-12">
                        <div id="header">
                            <h3>Leaderboard</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Table /> :
                    </div>
                </div>
            </div>
        );
    }
}

export default Main