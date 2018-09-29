import React,{ Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CollectionScreen from '../components/Mine/Collection';
import AddCollectionScreen from '../components/Mine/AddCollection';

export default createStackNavigator({
	Collection: {
		screen: CollectionScreen
	},
	AddCollection: {
		screen: AddCollectionScreen
	}
},{
	initialRouteName:'Collection',
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