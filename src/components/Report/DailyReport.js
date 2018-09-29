import React,{ Component } from 'react';
import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	FlatList,
	TouchableOpacity 
} from 'react-native';
import Axios from '../../axios';


class ReportCell extends Component{
	render(){
		return (<View style={styles.reportCellWrap}>
			    	<View style={styles.reportHeaderWrap}>
			    		<View style={styles.reportHeaderTitle}>
			    			<Image 
								style={styles.reportHeaderImg}
			    				source={require('../../assets/images/daily_report.png')} />
			    			<Text style={styles.reportHeaderTxt}>{this.props.item.name}</Text>
			    		</View>
			    		<Image 
			    			style={styles.reportHeaderRightIcon}
			    			source={require('../../assets/images/arrow_right.png')} />
			    	</View>
			    	<View style={styles.reportCellContentWrap}>
			    		<Text style={styles.reportContentTopTxt}>总计</Text>
			    		<Text style={styles.reportContentTotal}>{this.props.item.total}<Text style={styles.reportContentUnit}>万元</Text></Text>
			    		<View style={styles.reportContentBottomWrap}>
			    			<Text style={styles.reportContentBottomTxt}>{`当日值：${this.props.item.curData}`}</Text>
			    			<Text style={styles.reportContentBottomTxt}>{`累计环比：${this.props.item.percent}%`}</Text>
			    		</View>
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

export default class DailyReport extends Component{
	state = {
		reportList:[]
	}

	getReportList = ()=>{
		Axios.ajax({
			url:'/dailyReport'
		}).then((res)=>{
			//console.log(res)
			this.setState({reportList:res.data})
		})
	}

	componentDidMount(){
		this.getReportList();
	}

	render(){
		return(
			<View style={styles.container}>
				<FlatList
				 	keyExtractor={(item)=>item.id.toString()}
				    data={this.state.reportList}
				    renderItem={({item}) => (<ReportCell item={item} />)}
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