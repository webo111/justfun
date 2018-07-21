'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import Util from '../../util/util';

class Loading extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let loadingtext = '加载中……';
        if(this.props.loadingtext){
            loadingtext = this.props.loadingtext;
        }
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="white"/>
                <Text style={styles.loadingTitle}>{loadingtext}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'gray',
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (Util.size.height-80)/2,
        left: (Util.size.width-100)/2,
    },

    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
});

export default Loading;