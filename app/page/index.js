'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TabOne from './tabone';
import Home from './main/home';
import Personal from './main/personal';
import ShoppingCart from './main/shoppingcart';
import ShopList from './main/shopList';

import AddressList from './address/addresslist';
import Market from './market/market';
import Login from './login';


const MyTab = TabNavigator({
   Home: {
       screen: Home,
       navigationOptions:({navigation,screenProps}) => ({
           header: null,
           gesturesEnabled:true,
           tabBarVisible:true,
           tabBarIcon: (({tintColor,focused}) => {
               return(
                   <SimpleLineIcons name="home" size={23} color={focused ? 'red' : '#000'} />
               )
           }),
           tabBarLabel:'首页'
       })
    },
    ShopList: {
        screen: ShopList,
        navigationOptions:({navigation,screenProps}) => ({
            headerTitle: '闪送超市',
            headerStyle:{
                backgroundColor:screenProps? screenProps.themeColor: '#4ECBFC',
                elevation: 0
            },
            headerTitleStyle: {
                fontSize:20,
                color:'white'
            },
            gesturesEnabled: true,
            tabBarVisible: true,
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <SimpleLineIcons name="rocket" size={23} color={focused ? 'red' : '#000'} />
                )
            }),
            tabBarLabel: '闪送超市'
        })
    },
    ShoppingCart: {
        screen: ShoppingCart,
        navigationOptions:({navigation,screenProps}) => ({
            headerTitle: '购物车',
            headerStyle:{
                backgroundColor:screenProps? screenProps.themeColor: '#4ECBFC'
            },
            headerTitleStyle: {
                fontSize:20,
                color:'white'
            },
            gesturesEnabled: true,
            tabBarVisible: true,
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <SimpleLineIcons name="basket" size={23} color={focused ? 'red' : '#000'} />
                )
            }),
            tabBarLabel: '购物车'
        })
    },
    Personal: {
        screen: Personal,
        navigationOptions:({navigation,screenProps}) => ({
            headerTitle: '我的',
            headerStyle:{
                backgroundColor:screenProps? screenProps.themeColor: '#4ECBFC'
            },
            headerTitleStyle: {
                fontSize:20,
                color:'white'
            },
            gesturesEnabled: true,
            tabBarVisible: true,
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <SimpleLineIcons name="user" size={23} color={focused ? 'red' : '#000'} />
                )
            }),
            tabBarLabel: '我的'
        })
    }
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled: true, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        // 安卓属性
        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        activeTintColor:'red',
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        inactiveTintColor:'#000',
        showIcon:true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        style:{
            backgroundColor: 'white'
        },
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // labelStyle:{}, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }
});

// 初始化StackNavigator
const RootNavigator = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    MyTab:{
        screen:MyTab,
    },
    TabOne: {
       screen: TabOne
    },
    // 将需要跳转的页面注册在这里，全局才可以跳转
    AddressList: {
        screen: AddressList
    },
    Market: {
        screen: Market
    },
    Login: {
        screen: Login
    }

},{

});

export default RootNavigator;