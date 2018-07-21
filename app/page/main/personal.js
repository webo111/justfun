'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    ScrollView,
    Image,
    View
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AddressList from '../address/addresslist';

class MenuItem extends Component {
    constructor(props){
        super(props);
    }
    _performClick() {
        var onClick = this.props.onClick;
        if(onClick){
            onClick();
        }
    }

    render() {
        let margin2Top = 0;
        if(this.props.margin2Top) {
            margin2Top = parseInt(this.props.margin2Top);
        }
        return (
            <TouchableHighlight underlayColor="#dad9d7" onPress={() => this._performClick()}>
                <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#ffffff',height:45,marginTop:margin2Top,paddingLeft:20,paddingRight:20}}>
                    <Entypo name={this.props.icon} size={23} color="#900" />
                    <Text  style={{flex:1,color:'#333333',marginLeft:10}}>{this.props.title}</Text>
                    <SimpleLineIcons name="arrow-right" size={23} color="#900" />
                </View>
            </TouchableHighlight>
        );
    }
}

class Personal extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }
    componentDidMount() {
        /*store.get('user').then((userdata)=>{
         this.setState({
         user:userdata,
         })});*/
        this.setState({
            user: {
                userName: 'wemin'
            },
        });
    }
    _addNavigator(component, title) {
        const { navigate } = this.props.navigation;
        navigate(component);
    }
    _call() {
        alert('tel://4007008780');
    }
    render(){
        let that = this;
        let name = '1111';
        if(this.state.user){
            name = this.state.user.userName;
        }
        return(
            <View>
                <ScrollView style={{backgroundColor:'#eef0f3'}}>
                    <View>
                        <Image source={require('../../../image/adv/adv-01.png')} />
                    </View>

                    <MenuItem
                        title='地址管理'
                        icon='address'
                        onClick={() => that._addNavigator('AddressList',"地址管理")}/>

                    <MenuItem
                        title='我的订单'
                        margin2Top='1'
                        icon="text-document"
                        onClick={() => {that._addNavigator('AddressList',"订单列表")}}/>

                    <MenuItem
                        title='我的红包'
                        margin2Top='1'
                        icon="clipboard"
                        onClick={() => {that._addNavigator('AddressList',"我的红包")}}/>

                    <MenuItem
                        title='我的贝壳'
                        margin2Top='1'
                        icon="palette"
                        onClick={() => {that._addNavigator('AddressList',"我的贝壳")}}/>

                    <TouchableHighlight
                        style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff',height:45,marginTop:30}}
                        underlayColor="#dad9d7" onPress={()=>this._call()}>
                        <Text >拨打客服400-700-8780</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    center:{
        alignItems:'center',
        justifyContent: 'center',
    },
    userName:{
        color:'#ffffff',
        fontSize:20,
    },
    transparent:{
        backgroundColor:'#00000000',
    },
    header: {
        height: 100,
    },
    iconSize: {
        height:20,
        width:20,
        resizeMode: Image.resizeMode.contain,
    },
    logoSize: {
        height:40,
        width:40,
        resizeMode: Image.resizeMode.contain,
    }

});

export default Personal;