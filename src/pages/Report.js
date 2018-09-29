import React,{ Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ReportIndexScreen from '../components/Report/ReportIndex';

export default createStackNavigator({
	ReportIndex: {
		screen: ReportIndexScreen
	}
},{
	initialRouteName:'ReportIndex',
	navigationOptions:{
		headerStyle:{
			backgroundColor:'#f54545',
			borderBottomWidth:0
		},
		headerTitleStyle:{
			fontSize:16,
			color:'#fff'
		},
		headerTintColor:'#fff'
	}
});