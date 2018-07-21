'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';
import Loading from '../common/loading';
import Slider from '../common/slider';
import ItemBlock from '../itemblock/itemblock';
import ShopList from '../shop/shopList';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            loaded:true,
            banners:[{
                title: 'hello',
                url: 'http://www.baidu.com'
            },{
                title: 'world',
                url: 'http://www.baidu.com'
            }]
        };
    }
    _goPersonal() {
        const { navigate } = this.props.navigation;
        navigate('TabOne');
    }

    renderContent(){
        return(
            <ScrollView style={[styles.container]}>
                <Slider banners={this.state.banners}/>
                <ItemBlock/>
                <ShopList/>
                <View>
                    <Text>Hello Home!</Text>
                    <Text onPress={this._goPersonal.bind(this)}>
                        点我跳转到 TabOne
                    </Text>
                    <Text style={styles.instructions} onPress={()=>{
                        const { navigate } = this.props.navigation;
                        navigate('TabOne');
                    }}>
                        在TabOne中有reset和navigate的使用方法(点文字跳转)
                    </Text>
                </View>
            </ScrollView>
        )
    }
    render(){
        if(!this.state.loaded){
            return <Loading/>
        }
        return this.renderContent();
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    }

});

export default Home;