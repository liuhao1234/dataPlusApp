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
import Picker from 'react-native-picker';
import TabPage from './TabPage';
	
class HeaderLeft extends Component{
	componentDidMount(){
		// console.log(Picker)
		// let data = [];
		// for(var i=0;i<100;i++){
		//     data.push(i);
		// }

		// Picker.init({
		//     pickerData: data,
		//     selectedValue: [59],
		//     onPickerConfirm: data => {
		//         console.log(data);
		//     },
		//     onPickerCancel: data => {
		//         console.log(data);
		//     },
		//     onPickerSelect: data => {
		//         console.log(data);
		//     }
		// });
		// Picker.show();
	}

	_pickerShow = ()=>{
		console.log(Picker)
        // Picker.init({
        //     pickerData: [
        //             {
        //               北京:[
        //                       {
        //                           朝阳区:['艾欧尼亚','暗影岛']
        //                       },
        //                       {
        //                           东城区:['艾欧尼亚2','暗影岛2']
        //                       }
        //                      ]
        //             },

        //             {
        //                 重庆:[
        //                     {
        //                         渝北区:['光电园','嘉州']
        //                     },
        //                     {
        //                         江北区:['观音桥','华新街']
        //                     }
        //                 ]
        //             },

        //         ],
        //     selectedValue: ['重庆','渝北区','嘉州'],
        //     pickerConfirmBtnText:'确定',
        //     pickerCancelBtnText:'取消',
        //     pickerTitleText:'选择城市',
        //     pickerToolBarBg: [232, 232, 232, 1],
        //     pickerBg:[245,245,245,1],
        //     pickerToolBarFontSize: 16,
        //     pickerFontSize: 20,
        //     onPickerConfirm: (data) => {
        //         // console.log(data)
        //         var pp = JSON.stringify(data)

        //         AsyncStorage.setItem('cityContent',pp)

        //         AsyncStorage.getItem('cityContent').then( (data) => {
        //             var mm = JSON.parse(data)

        //             this.setState({
        //                 cityContent: mm
        //             })
        //         })
        //     }
        // });
        // Picker.show();
    }

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

class HeaderRight extends Component{
	render(){
		return(
			<TouchableOpacity>
				<Image 
					style={styles.topRightImg}
					source={require('../../assets/images/search_icon.png')} 
				/>
			</TouchableOpacity>
		)
	}
}

export default class ReportIndex extends Component{
	state = {
		reportList:[]
	}
	static navigationOptions = ({navigation,navigationOptions})=>{
		return {
			title:"首页",
			headerTitle:<HeaderCenter />,
			headerStyle:{
				...navigationOptions.headerStyle,
				backgroundColor:"#f54545"
			},
			headerLeft:<HeaderLeft onPress={()=>navigation.goBack()} />,
			headerRight:<HeaderRight />
		}
	}

	componentDidMount(){
		//this.getReportList();
	}

	render(){
		return(
			<View style={styles.container}>
				<TabPage />
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
	topRightImg:{
		width:18,
		height:18,
		marginRight:10
	},
	reportCellWrap:{
		backgroundColor:"#fff",
		marginTop:8
	},
	reportHeaderWrap:{
		flex:1,
		flexDirection:'row',
		alignItems:"center",
		padding:10,
		borderBottomWidth:1,
		borderBottomColor:"#f7f7f7"
	},
	reportHeaderTitle:{
		flex:1,
		flexDirection:'row',
		alignItems:"center"
	},
	reportHeaderImg:{
		width:16,
		height:18,
		marginRight:5
	},
	reportHeaderTxt:{
		fontSize:14
	},
	reportHeaderRightIcon:{
		width:16,
		height:18
	},
	reportCellContentWrap:{
		flex:1,
		justifyContent:"center",
		marginTop:20,
		marginBottom:20
	},
	reportContentTopTxt:{
		textAlign:"center",
		fontSize:14
	},
	reportContentTotal:{
		textAlign:"center",
		fontSize:26,
		color:"#f54545",
		marginTop:10,
		marginBottom:10
	},
	reportContentUnit:{
		fontSize:12,
		fontWeight:"bold"
	},
	reportContentBottomWrap:{
		flex:1,
		flexDirection:"row",
		justifyContent:"center"
	},
	reportContentBottomTxt:{
		fontSize:14,
		marginRight:10,
		marginLeft:10
	}
})