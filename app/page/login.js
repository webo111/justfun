'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight,
    TextInput
} from 'react-native';
import Util from '../util/util';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: "",
            code: "",
            logined: false
        };
    }
    checkPhone(phone){
        return phone&&phone.length===11;
    }
    getCode(){
        var phone = this.state.phone;
        if(!this.checkPhone(phone)){
            alert("请输入正确的手机号码");
            return;
        }
        alert("验证码为6666");
    }
    checkCode(code){
        return code&&code.length===4;
    }
    login(){
        var phone = this.state.phone;
        var code = this.state.code;
        /*if(!this.checkPhone(phone)){
         alert("请输入正确的手机号码");
         return;
         }*/
        if(!this.checkCode(code)){
            alert("验证码为4位数字");
            return;
        }
        var userData = {
            "name":"wemin",
            "phone":"15723327378"
        };
        this.loginSucc(userData);
    }
    loginSucc(userData){
        this.props.loginResult(userData);
    }
    register() {
        alert('register user');
    }
    forgetPassword() {
        alert('forget password');
    }
    renderLogin(){
        return(
            <Image style={[Util.size, styles.container]} source={require('../../image/bg_login.jpg')}>
                <View style={styles.loginform}>
                    <Text style={[styles.title,{marginTop:40}]} >用户登陆</Text>
                    <View style={[styles.inputRow,{marginTop:90}]}>
                        <Text style={styles.label} >手机号</Text>
                        <TextInput
                            keyboardType ='numeric'
                            clearButtonMode='while-editing'
                            style={styles.input}
                            placeholder="请输入11位手机号"
                            onChangeText={(text) => this.setState({phone: text})}/>
                    </View>
                    <View style={[styles.line]} />
                    <View style={[styles.inputRow,{marginTop:20}]}>
                        <Text style={styles.label}>验证码</Text>
                        <TextInput
                            keyboardType ='numeric'
                            clearButtonMode='while-editing'
                            style={styles.input}
                            placeholder="4位数字"
                            onChangeText={(text) => this.setState({code: text})}/>
                        <TouchableHighlight style={[styles.btn,{width:80,height:30}]} underlayColor='#0057a84a' onPress={this.getCode.bind(this)}>
                            <Text style={{color:'#fff',fontSize:12}}>6666</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.line,{marginTop:2}]} />
                    <View style={{marginTop:5,flexDirection:'row'}}>
                        <TouchableHighlight style={{width:70}} onPress={this.register.bind(this)}>
                            <Text style={{color:'#3793ff'}}>立即注册</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginLeft:195}} underlayColor='#0057a84a' onPress={this.forgetPassword.bind(this)}>
                            <Text style={{color:'#3793FF'}}>忘记密码?</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight style={[styles.btn,{marginTop:40}]} underlayColor='#0057a84a' onPress={this.login.bind(this)}>
                        <Text style={{color:'#fff'}}>登录</Text>
                    </TouchableHighlight>
                </View>
            </Image>
        );
    }
    render(){
        return this.renderLogin();
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    loginform:{
        backgroundColor:'#00000000',
        paddingLeft:40,
        paddingRight:40,
    },
    title: {
        color:'#ffffff',
        fontSize:20,
        textAlign:'center'
    },
    inputRow:{
        backgroundColor:'#00000000',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:35,
        borderColor:'#ccc',
        color:'#fff',
        flex:1,
        fontSize:14,
    },
    label: {
        width:80,
        fontSize: 14,
        color:'#ffffff'
    },
    line:{
        height:1,
        backgroundColor: '#ffffff',
    },
    btn:{
        height:35,
        backgroundColor:'#4d796e',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#ffffff',
    }

});

export default Login;