import React,{ Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Track extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.textColor}>这里是‘跟踪’页面</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#f5f5f5'
	},
	textColor:{
		color:'#0ff'
	}
})