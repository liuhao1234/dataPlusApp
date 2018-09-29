import { AsyncStorage, Alert } from "react-native";
import axios from 'axios';

export default class Axios {
	static ajax(options){
		const baseURL =  "https://www.easy-mock.com/mock/5ba45cefd8a28e3d32aaf90a/dataPlus";
		const token = AsyncStorage.getItem("beautifulGirl");
		return new Promise((resolve,reject)=>{
			axios({
				method:'post',
				baseURL,
				url:options.url,
				data:options.data,
				headers:{
					'Content-Type': 'application/json',
					token
				}
			}).then((response)=>{
				//console.log(response)
				if(response.status === 200){//http返回的200
					let res = response.data;
					if(res.code === 200){//code是501的时候请求超时
						resolve(res.data);
						AsyncStorage.setItem("beautifulGirl",res.token);
					}
				}else{
					Alert.alert(
						'获取失败',
						'数据获取失败，请从新尝试',
						[
							{text:'我知道了'}
						],
						{ cancelable: false }
					)
				}
			})
		})
	}
}