/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    Button
} from 'react-native';
import store from 'react-native-simple-store';
import Login from './app/page/login';
import Index from './app/page/index';

export default class justfun extends Component {
    constructor(props){
        super(props);
        this.state = {
            logined: true
        };
    }
    loginSucc(userData){
        store.save('user', userData);
        this.setState({
            logined:true
        });
    }
    _renderLogin(){
        return (
            <Login loginResult={(userData)=>this.loginSucc(userData)}/>
        );
    }
    _renderIndex(){
        return (
            <Index screenProps={{themeColor:'red'}}/>
        );
    }
    render() {
        if(this.state.logined){
            return this._renderIndex();
        } else {
            return this._renderLogin();
        }
        /*return (
            <Index screenProps={{themeColor:'red'}}/>
        );*/
    }
}

AppRegistry.registerComponent('justfun', () => justfun);
