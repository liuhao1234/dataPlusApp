import React,{ Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class Title extends Component{
	render(){
		return (
			<Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>{this.props.txt}</Text>
		)
	}
}

export default class AddCollection extends Component{

	static navigationOptions = ({ navigation,navigationOptions })=>{
		return {
			title:navigation.getParam('name'),
			headerTitle:<Title txt={navigation.getParam('name')} />,
			headerStyle:{
				...navigationOptions.headerStyle,
				backgroundColor:"#f54545"
			}
		}
	}

	updateTitle = ()=>{
		this.props.navigation.setParams({'name':'aaa'})
	}

	render(){
		const { navigation } = this.props;
		const { setParams } = navigation;
		return(
			<View style={styles.container}>
				<Text style={styles.textColor}>{this.props.navigation.getParam("name")}</Text>
				<Text onPress={()=>this.updateTitle()}>更新title的名字</Text>
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
		color:'#f00'
	}
})