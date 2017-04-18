import React, {Component} from 'react';
import './App.css';

import Header from './Header';
import InputForm from './InputForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showIntro: true
        }
    }

    render() {
        return (
            <div>
                <Header/>
                 <InputForm />
            </div>
        );
    }
}
export default App;
