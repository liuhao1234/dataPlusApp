import React,{ Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import MineScreen from './pages/Mine';
import ReportScreen from './pages/Report';
import PresentationScreen from './pages/Presentation';
import TrackScreen from './pages/Track';

export default createBottomTabNavigator({
	Mine: {
		screen : MineScreen,
		navigationOptions : {
			title:"我的",
			tabBarButtonComponent: TouchableOpacity,
			tabBarIcon:({focused,tintColor}) => {
				const Icon = focused?(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIconActive_01.png')}
					   ></Image>):(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIcon_01.png')}
					   ></Image>)
				return Icon
			}
		}
	},
	Report: {
		screen : ReportScreen,
		navigationOptions : {
			title:"报表",
			tabBarButtonComponent: TouchableOpacity,
			tabBarIcon:({focused,tintColor}) => {
				const Icon = focused?(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIconActive_02.png')}
					   ></Image>):(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIcon_02.png')}
					   ></Image>)
				return Icon
			}
		}
	},
	Presentation: {
		screen : PresentationScreen,
		navigationOptions : {
			title:"报告",
			tabBarButtonComponent: TouchableOpacity,
			tabBarIcon:({focused,tintColor}) => {
				const Icon = focused?(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIconActive_03.png')}
					   ></Image>):(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIcon_03.png')}
					   ></Image>)
				return Icon
			}
		}
	},
	Track:{
		screen : TrackScreen,
		navigationOptions : {
			title:"跟踪",
			tabBarButtonComponent: TouchableOpacity,
			tabBarIcon:({focused,tintColor}) => {
				const Icon = focused?(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIconActive_04.png')}
					   ></Image>):(<Image 
					   style={{width:22,height:22}}
					   color={tintColor}
					   source={require('./assets/images/tabBarIcon_04.png')}
					   ></Image>)
				return Icon
			}
		}
	}
},{
	initialRouteName:'Report',//页面初始化时加载的页面
	order:['Mine','Report','Presentation','Track'],//页面初始化时选项卡的顺序
	tabBarOptions:{
		activeTintColor:'#f54545',
		inactiveTintColor:'#808080',
		style:{
			backgroundColor:'#fff',
			borderTopWidth:1,
			borderTopColor:'#f0f0f0'
		},
		labelStyle:{
			fontSize:12
		}
	}
});