import React from 'react';
import './App.css';

import Header from './conponents/Header';
import Footer from './conponents/Footer';
import Main from './containers/Main';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App