

const EventEmitter = require('events').EventEmitter


let state = {
	userInfo :{
		userID:''
	}
}

const store = Object.assign({},EventEmitter.prototype,{
	state,
	
	getUserInfo(){
		return this.state.userInfo
	},
	
	changeUserInfo(userInfo){
		this.state.userInfo=userInfo
		console.log(this.state.userInfo)
		this.emit('userInfo-change')
	},
	
	
	userInfoListener(callback){
		this.on('userInfo-change',callback)
	}
})

export default store
