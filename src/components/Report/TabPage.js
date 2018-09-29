import React,{ Component } from 'react';
import { 
	StyleSheet, 
	View, 
	Text 
} from 'react-native';
import { createTabNavigator } from 'react-navigation';
import StockDataScreen from './StockData';
import DailyReportScreen from './DailyReport';
import MonthReportScreen from './MonthReport';

export default createTabNavigator({
	StockData: {
		screen: StockDataScreen,
		navigationOptions:{
			tabBarLabel:'存量指标',
			
		},
	},
	DailyReport: {
		screen: DailyReportScreen,
		navigationOptions:{
			tabBarLabel:'日报',
		},
	},
	MonthReport: {
		screen: MonthReportScreen,
		navigationOptions:{
			tabBarLabel:'月报',
		},
	}
},{
	initialRouteName:'StockData',
	tabBarPosition:'top',
	swipeEnabled: true,
	animationEnabled: true,
	tabBarOptions:{
		activeTintColor:'#f54545',
		labelStyle: {
		    fontSize: 14,
		    lineHeight:40
		},
		style: {
			borderTopWidth:0,
			height:40,
		    backgroundColor: '#fff',
		},
		iconStyle:{
			width:0,
			height:0
		},
		indicatorStyle: {
            height: 0
        },

	}
});
