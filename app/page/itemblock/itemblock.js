'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import Util from '../../util/util';

const screenW = Util.size.width;
const cols = 3;
const cellW = 140;
const cellH = 110;
const vMargin = (screenW - cellW * cols)/(cols + 1);
const hMargin = 10;

class ItemBlock extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        };
    }
    //keyExtractor = (item, index) => item.id;

    renderRow(item) {
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{alert('点击了'+item.title)}} >
                <View style={styles.innerViewStyle}>
                    <Image source={require('../../../image/icon_bottomtag_home_s.png')} style={styles.iconStyle} />
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => this.renderRow(item)}
                extraData={this.state}
                keyExtractor={(item, index) => item.id}
                columnWrapperStyle={styles.innerViewStyle}
                numColumns={cols}
                style={styles.listViewStyle}
            />
        )
    }

}
const styles = StyleSheet.create({
    listViewStyle:{
        flexGrow: 0
    },
    innerViewStyle:{
        width: cellW,
        height: cellH,
        marginLeft: vMargin,
        marginTop: hMargin,
        // 文字内容居中对齐
        alignItems: 'center'
    },
    iconStyle:{
        width:80,
        height:80,
    }

});

export default ItemBlock;