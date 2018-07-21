'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    FlatList,
    TouchableHighlight,
    View
} from 'react-native';
import Loading from '../common/loading';

class ShopList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loaded:true,
            dataSource: [{
                id: 1,
                goods_name: '娇子时代阳光盒',
                shichang: 2.50
            },{
                id: 2,
                goods_name: '杯子',
                shichang: 2.50
            }]
        };
    }
    componentDidMount() {
        this.setState({
            loaded:true
        });
    }
    _addShichang(item) {
        alert(item.shichang+' + 1');
    }
    _renderRow(item) {
        return(
            <View>
                <View style={styles.rowContainer}>
                    <TouchableHighlight style={{marginRight:10}} onPress={() => this._addShichang(item)}>
                        <Image style={styles.thumb} source={require('../../../image/icon_bottomtag_home_s.png')} />
                    </TouchableHighlight>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}>
                            <TouchableHighlight style={{marginRight:10}} onPress={() => this._addShichang(item)}>
                                <Text>{item.goods_name}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'flex-end',}}>
                            <Text style={{color:'#626770'}}>倍全价:</Text>
                            <Text style={{color:'#f28006',flex:1}}>{item.shichang}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.line}/>
            </View>
        );
    }
    render(){
        if(!this.state.loaded){
            return <Loading loadingtext='正在加载商店...'/>
        }
        return(
            <View>
                <View style={{paddingLeft:10}}>
                    <Text>热门商店</Text>
                </View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => this._renderRow(item)}
                    keyExtractor={(item, index) => item.id}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        padding: 10,
        height:90,
        justifyContent: 'center',
    },
    thumb: {
        width: 70,
        height: 70,
        marginRight: 10
    },
    line:{
        backgroundColor: '#ffc36d',
        height:1,
    },

});

export default ShopList;