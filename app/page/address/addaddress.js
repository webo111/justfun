'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class AddAddress extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>添加地址</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingBottom:68,
    }

});

export default AddAddress;