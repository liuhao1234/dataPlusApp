import React,{ Component } from 'react';
import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	FlatList,
	TouchableOpacity 
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Axios from '../../axios';

class HeaderLeft extends Component{
	render(){
		return(
			<TouchableOpacity onPress={()=>this._pickerShow()}>
				<View style={styles.topLeftWraper}>
					<Image
						style={styles.topLeftImg}
						source={require('../../assets/images/area_icon.png')}
					/>
					<Text
						style={styles.topLeftTxt}
					>全省</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

class HeaderCenter extends Component{
	state = {
		date:"2018-09-08"
	}
	render(){
		return(
			<View style={styles.topCenterWraper}>
				<TouchableOpacity>
					<DatePicker
				        date={this.state.date}
				        mode="date"
				        format="YYYY-MM-DD"
				        minDate="2016-05-01"
				        maxDate="2018-12-01"
				        confirmBtnText="确定"
				        cancelBtnText="取消"
				        locale="zh-Hans"
				        iconSource={require("../../assets/images/datepicker_icon.png")}
				        customStyles={{
							dateIcon: {
								...styles.topCenterImg
							},
							dateInput: {
								borderWidth:0,
								outline:0,
							},
							dateText:{
								...styles.topCenterTxt
							},
							btnTextConfirm:{
								color:"#f54545"
							}
				            // ... You can check the source to find the other keys.
				        }}
				        onDateChange={(date) => {this.setState({date: date})}}
			        />
			    </TouchableOpacity>
			</View>
		)
	}
}

class PresentationCell extends Component{
	render(){
		return (<View style={styles.presentationCellWrap}>
			    	<View style={styles.presentationHeaderWrap}>
			    		<View style={styles.presentationHeaderTitle}>
			    			<Image 
								style={styles.presentationHeaderImg}
			    				source={require('../../assets/images/presentation_title_icon.jpg')} />
			    			<Text style={styles.presentationHeaderTxt}>{this.props.item.name}</Text>
			    		</View>
			    	</View>
			    	<View style={styles.presentationCellContentWrap}>
			    		<Image 
			    			style={styles.presentationContentImg}
							source={require('../../assets/images/presentation_banner01.jpg')}
			    		/>
			    		<Text style={styles.presentationContentTxt}>{this.props.item.info}</Text>
			    	</View>
			    	<View style={styles.collectWrap}>
			    		<View style={styles.collectContent}>
				    		{this.props.item.collected?<Image 
				    			style={styles.collectImg}
								source={require('../../assets/images/collected.png')}
				    		/>:<Image 
				    			style={styles.collectImg}
								source={require('../../assets/images/collect.png')}
				    		/>}
				    		{this.props.item.collected?<Text
								style={{color:"#f54545",fontSize:14}}
				    		>已收藏</Text>:<Text
								style={{fontSize:14}}
				    		>收藏</Text>}
			    		</View>
			    	</View>
			    </View>)
	}
}

export default class Presentation extends Component{
	state = {
		presentationList:[]
	}
	static navigationOptions = ({navigation,navigationOptions})=>{
		return {
			title:"首页",
			headerTitle:<HeaderCenter />,
			headerStyle:{
				...navigationOptions.headerStyle,
				backgroundColor:"#f54545"
			},
			headerLeft:<HeaderLeft onPress={()=>navigation.goBack()} />
		}
	}
	getPresentation = ()=>{
		Axios.ajax({
			url:'/presentationList'
		}).then((res)=>{
			//console.log(res)
			this.setState({presentationList:res.data})
		})
	}
	componentDidMount(){
		this.getPresentation();
	}
	render(){
		return(
			<View style={styles.container}>
				<FlatList
				 	keyExtractor={(item)=>item.id.toString()}
				    data={this.state.presentationList}
				    renderItem={({item}) => (<PresentationCell item={item} />)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor:'#f5f5f5'
	},
	textColor:{
		color:'#f00'
	},
	topLeftWraper:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	topLeftImg:{
		width:18,
		height:18,
		marginLeft:10
	},
	topLeftTxt:{
		color:'#fff',
		fontSize:16,
		marginLeft:5
	},
	topCenterWraper:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	topCenterTxt:{
		color:'#fff',
		fontSize:18
	},
	topCenterImg:{
		width:18,
		height:18,
		marginLeft:-10
	},
	presentationCellWrap:{
		backgroundColor:"#fff",
		marginTop:8
	},
	presentationHeaderWrap:{
		flex:1,
		flexDirection:'row',
		alignItems:"center",
		padding:10,
		borderBottomWidth:1,
		borderBottomColor:"#f7f7f7"
	},
	presentationHeaderTitle:{
		flex:1,
		flexDirection:'row',
		alignItems:"center"
	},
	presentationHeaderImg:{
		width:24,
		height:18,
		marginRight:5
	},
	presentationHeaderTxt:{
		fontSize:14
	},
	presentationCellContentWrap:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		marginTop:10,
		marginBottom:10
	},
	presentationContentImg:{
		width:340,
		height:140,
		marginBottom:10
	},
	presentationContentTxt:{
		width:340
	},
	collectWrap:{
		paddingLeft:20,
		paddingRight:20
	},
	collectContent:{
		flex:1,
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center",
		borderTopWidth:1,
		borderTopColor:"#f7f7f7",
		paddingTop:10,
		paddingBottom:10
	},
	collectImg:{
		width:20,
		height:20,
		marginRight:5
	}
})