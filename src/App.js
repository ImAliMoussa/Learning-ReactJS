import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
// require('dotenv').config()

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;