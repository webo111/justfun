'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    Image,
    TouchableHighlight,
    View
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Loading from '../common/loading';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            loaded:false,
            cartList: [{
                id: 1,
                products: [{
                    id: 1,
                    goodsName: 'hello',
                    defaultImage: '../../../image/adv/adv-01.png',
                    shichang: '版本',
                    quantity: 2
                },{
                    id: 2,
                    goodsName: 'hello2',
                    defaultImage: '../../../image/adv/adv-01.png',
                    shichang: '版本',
                    quantity: 2
                }]
            }]
        };
    }
    componentDidMount() {
        this._fetchData();
    }
    _fetchData() {
        /*var thiz = this;
        var thizDataSource = thiz.state.cartList.dataSource;
        Util.post(API.CARTLIST,Global.user,
            function (ret){
                if(ret.code==0&&ret.data.length>0){
                    thiz.setState({
                        cartList:{
                            dataSource: thizDataSource.cloneWithRows(ret.data),
                            loaded:true,
                        },
                    });
                }
            });*/
        this.setState({
            loaded:true
        });
    }
    _addQuantity(){
        alert('add + 1');
    }
    _reduceQuantity(){
        alert('reduce - 1');
    }
    _renderRow(items) {
        let products = items.products;
        let procuctsView = [];
        for(var i = 0; i < products.length; i++){
            var item = products[i];
            procuctsView.push(
                <View key={item.id}>
                    <View style={styles.rowContainer}>
                        <Image style={styles.thumb} source={require('../../../image/icon_bottomtag_home_s.png')} />
                        <View style={{flex:1}}>
                            <Text style={{flex:1}}>{item.goodsName}</Text>
                            <View style={{flexDirection:'row',alignItems:'flex-end',}}>
                                <Text style={{color:'#f28006',flex:1}}>{item.shichang}</Text>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    <TouchableHighlight onPress={()=>this._addQuantity()}>
                                        <SimpleLineIcons name="plus" size={23} color="#5bf239" />
                                    </TouchableHighlight>
                                    <Text style={{color:'#f28006',paddingLeft:10,paddingRight:10}}>{item.quantity}</Text>
                                    <TouchableHighlight onPress={()=>this._reduceQuantity()}>
                                        <SimpleLineIcons name="minus" size={23} color="#F24000" />
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}/>
                </View>
            );
        }
        return(
            <View style={{marginBottom:15,backgroundColor:'#ffffff',}}>
                <View style={styles.line}/>
                <View style={{justifyContent:'center',height:45,paddingLeft:15}}>
                    <Text style={{color:'#333333'}}>{'倍全旗舰店附近'}</Text>
                </View>
                <View style={styles.line}/>
                {procuctsView}
            </View>
        );
    }

    render(){
        if(!this.state.loaded){
            return <Loading loadingtext='正在加载购物车数据...'/>
        }
        return(
            <View>
                <FlatList
                    data={this.state.cartList}
                    renderItem={({item}) => this._renderRow(item)}
                    extraData={this.state.cartList}
                    keyExtractor={(item, index) => item.id}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#eef0f3',
        paddingBottom:68,
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10,
        height:90,
        justifyContent: 'center',
    },
    line:{
        backgroundColor:'#eef0f3',
        height:1,
    }
});

export default ShoppingCart;