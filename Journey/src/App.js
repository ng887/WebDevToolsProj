/**
 * Created by neha on 4/6/2017.
 */

import React, {Component} from 'react';
import './App.css';

import Intro from './Intro';
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
                {this.state.showIntro && <Intro/>}
                 <InputForm />
            </div>
        );
    }
}
export default App;
