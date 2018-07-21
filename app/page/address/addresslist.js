'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableHighlight,
    View
} from 'react-native';
import Loading from '../common/loading';
import AddAddress from './addaddress';

class AddressList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            dataSource: [{
                id: 1,
                title: '水果预定'
            },{
                id: 2,
                title: '衣服干洗'
            },{
                id: 3,
                title: '蛋糕预定'
            },{
                id: 4,
                title: '收发快件'
            },{
                id: 5,
                title: '签到有奖'
            }]
        }
    }
    componentDidMount() {
        this.setState({
            loaded: true
        });
    }
    _renderRow(item) {
        return(
            <TouchableHighlight activeOpacity={0.8} onPress={()=>{alert('点击了'+item.title)}} >
                <View>
                    <Text>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
    _addAddr(){
        const { navigate } = this.props.navigation;
        navigate('AddAddress');
    }
    render(){
        if(!this.state.loaded){
            return <Loading loadingtext='正在加载地址列表数据...'/>
        }
        return(
            <View>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => this._renderRow(item)}
                        extraData={this.state.dataSource}
                        keyExtractor={(item, index) => item.id}
                    />
                    <TouchableHighlight
                        underlayColor='#eef0f3'
                        style={{ justifyContent: 'center',alignItems: 'center',height:50,backgroundColor:'#ee7700'}}
                        onPress={() => this._addAddr()}>
                        <Text style={{fontSize:18,color:'white'}}>添加地址</Text>
                    </TouchableHighlight>
                </View>
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

export default AddressList;