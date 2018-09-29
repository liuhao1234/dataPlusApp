import React,{ Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import PresentationScreen from '../components/Presentation/Presentation';

export default createStackNavigator({
	Presentation: {
		screen: PresentationScreen
	}
},{
	initialRouteName:'Presentation',
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