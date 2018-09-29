import React,{ Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class StockData extends Component{
	render(){
		return(
			<View style={styles.container}>
				<LinearGradient
					colors={['#f54545', '#ff8251']}
					style={{height:150, width:'100%'}}
				></LinearGradient>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex:1
	},
	contentTxt : {
		color:'#333'
	}
})