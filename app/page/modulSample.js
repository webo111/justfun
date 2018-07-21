'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class ModulSample extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Hello ModulSample!</Text>
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

export default ModulSample;