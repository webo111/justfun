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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Loading from '../common/loading';
import Category from './category';

class Market extends Component {
    constructor(props){
        super(props);
        this.state = {
            store_id: 8805,
            loaded: false,
            loadingmore: false,
            goodsList: {
                dataSource: [],
                loaded: true
            }
        }
    }
    componentDidMount() {
        this._fetchData();
    }
    //加载网络数据
    _fetchData() {
        /*Util.post(API.CATEGORYLIST,{'store_id':'8805'},
            function (ret){
                if(ret.code==0&&ret.data.assortment.length>0){
                    resultsCache.dataForCategory= ret.data.assortment;
                    thiz.setState({
                        loaded:true,
                    });
                    thiz._fetchGoodsByCategory(ret.data.assortment[0].cate_id);
                }
            });*/
        this.setState({
            loaded:true
        });
    }
    _fetchGoodsByCategory() {
        /*Util.post(API.GOODSLIST,params,
            function (ret){
                thiz._setGoodsList(ret.data);
            });*/
        this._setGoodsList();
    }
    _setGoodsList() {
        this.setState({
            goodsList:{
                dataSource: [{
                    id: 1,
                    goods_name: '娇子时代阳光盒',
                    quantity: 1,
                    shichang: 2.50
                },{
                    id: 2,
                    goods_name: '杯子',
                    quantity: 0,
                    shichang: 2.50
                }],
                loaded:true
            }
        });
    }
    _selectCategory() {
        this._fetchGoodsByCategory();
    }
    _addShichang(item) {
        alert(item.shichang+' + 1');
    }
    _reduceQuantity(item){
        alert(item.shichang+'reduce - 1');
    }
    _renderGoodsList(item, index) {
        return (
            <View>
                <View style={styles.rowContainer}>
                    <Image style={styles.thumb} source={require('../../../image/icon_bottomtag_home_s.png')} />
                    <View style={{flex:1}}>
                        <Text style={{flex:1}}>{item.goods_name}</Text>
                        <View style={{flexDirection:'row',alignItems:'flex-end',}}>
                            <Text style={{color:'#626770'}}>倍全价:</Text>
                            <Text style={{color:'#f28006',flex:1}}>{item.shichang}</Text>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <TouchableHighlight style={{marginRight:10}} onPress={() => this._addShichang(item)}>
                                    <SimpleLineIcons name="plus" size={23} color="#5bf239" />
                                </TouchableHighlight>
                                <Text style={{color:'#f28006',paddingLeft:10,paddingRight:10}}>{item.quantity}</Text>
                                <TouchableHighlight onPress={()=>this._reduceQuantity(item)}>
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
    render(){
        if(!this.state.loaded){
            return <Loading loadingtext='正在加载商品分类...'/>
        }

        let goodsListLoading = null;
        if(!this.state.goodsList.loaded){
            goodsListLoading = <Loading loadingtext='正在加载商品...'/>;
        }
        let resultsCache = {
            dataForCategory: {},
            dataForGoods: {},
            totalForGoods: {}
        };
        return(
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={{flex:1}}>
                        <Category
                            onSelect={() => this._selectCategory()}
                            categoryList = {resultsCache.dataForCategory}/>
                    </View>
                    <View style={{flex:3}}>
                        {goodsListLoading}
                        <FlatList
                            data={this.state.goodsList.dataSource}
                            renderItem={({item, index}) => this._renderGoodsList(item, index)}
                            keyExtractor={(item, index) => item.id}/>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor:'#eef0f3',
        marginBottom:120,
    },
    rowSeparator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 1,
        marginLeft: 4,
    },
    rowSeparatorHide: {
        opacity: 0.0,
    },
    scrollSpinner: {
        marginVertical: 20,
    },
    thumb: {
        width: 70,
        height: 70,
        marginRight: 10
    },
    line:{
        backgroundColor:'#eef0f3',
        height:1,
    },
    textContainer: {
        flex: 1
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    title: {
        fontSize: 20,
        color: '#656565'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10,
        height:90,
        justifyContent: 'center',
    }
});

export default Market;