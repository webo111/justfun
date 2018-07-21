'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    FlatList,
    View
} from 'react-native';
import CategoryStyle from './categoryStyle';

class Category extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryIndex: 0,
            loaded: false,
            dataSource: [{
                cate_id: 1,
                cate_name: '代购香烟'
            },{
                cate_id: 2,
                cate_name: '整箱购'
            },{
                cate_id: 3,
                cate_name: '水/饮料'
            },{
                cate_id: 4,
                cate_name: '乳制品'
            },{
                cate_id: 5,
                cate_name: '休闲零食'
            }]

        }
    }
    _genRows(index) {
        var holderList = [];
        for (var ii = 0; ii < this.props.categoryList.length; ii++) {
            holderList[ii] = ii == index;
        }
        return holderList;
    }
    _rowPressed(rowID, cate_id){
        this.props.onSelect(rowID,cate_id);
         this.setState({
                categoryIndex:rowID
            });
        //alert(cate_id);
    }
    _renderRow(item,index){
        //var cate = this.props.categoryList[index];
        var selected = this.state.categoryIndex == index;
        var styles_bg = selected?CategoryStyle.category_bg_select:CategoryStyle.category_bg_normal;

        return(
            <TouchableHighlight
                underlayColor ='#eef0f3'
                style = {[CategoryStyle.category,styles_bg]}
                onPress = {() => this._rowPressed(index, item.cate_id)}>
                <Text> {item.cate_name} </Text>
            </TouchableHighlight>
        );
    }

    render() {
        return(
            <View>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item, index}) => this._renderRow(item, index)}
                    keyExtractor={(item, index) => item.cate_id}/>
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

export default Category;