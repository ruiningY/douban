
//import jsonp from 'jsonp'
import dispatcher from './dispatcher'
import axios from 'axios'
const actions = {
	login(params){
		axios.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
			params:params
		}).then((res)=>{
			console.log(res.data)
			if(res.data.userID){
				dispatcher.dispatch({
					type:'CHANGE_USERINFO',
					userInfo:res.data
				})
			}else{
				alert('登录失败')
			}
			
		})
		
	}
}

export default actions