import React from 'react'
import actions from  '../../flux/actions'
import store from  '../../flux/store'
class Login extends React.Component{
	constructor(props,context){
		super(props,context)
		this.state={
			
		}
	}
	login(e){
		
		e.preventDefault()
		actions.login({
			status:'login',
			userID:this.refs.userID.value,
			password:this.refs.password.value
		})
	}
		
	
	render(){
		return(
			<div className="login fullheight">
				<h2><a href="">取消</a>登录豆瓣</h2>
				<div className="login_sbmit">
				<form onSubmit={this.login.bind(this)}>
					
					<input ref="userID" type="text"   placeholder="昵称" />
					<input  ref="password" type="password" placeholder="密码（最少6位）" />
					<button>登录</button>
					
				</form>
				</div>
				<div className="item_pasd">
					<div className="other_way">使用其他方式登录 & 找回密码</div>
					<div className="download"><a href="">注册豆瓣账号</a><a href="">下载豆瓣app</a></div>
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		store.userInfoListener(function(){
			//跳转回index
			
			this.props.history.push('index')
		}.bind(this))
	}
}

export default Login
