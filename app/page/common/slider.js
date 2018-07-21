'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';

class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            swiperShow:false,
        };
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }
    _loadWeb(title, loadurl) {
        alert(title+loadurl);
    }
    render(){
        let that = this;
        if(this.state.swiperShow){
            return(
                <View style={styles.container}>
                    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} showsPagination={true}>
                        {this.props.banners.map(function(banner){
                            return (
                                <TouchableHighlight key={banner.title} onPress={()=>that._loadWeb(banner.title, banner.url)}>
                                    <Image style={[styles.slide]} source={require('../../../image/adv/adv-01.png')}></Image>
                                </TouchableHighlight>
                            );
                        })}
                    </Swiper>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Image style={[styles.slide]} source={require('../../../image/adv/adv-01.png')}></Image>
                </View>
            );
        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:2,
    },
    wrapper: {
        height:125,
    },
    slide: {
        height:125,
    }

});

export default Slider;