/**
 * Created by neha on 4/6/2017.
 */

import React, {Component} from 'react';
import './App.css';

import Intro from './Intro';
import Header from './Header';
import InputForm from './InputForm';


class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Intro/>
                <InputForm />
            </div>
        );
    }
}
export default App;
