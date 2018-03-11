import React from 'react'
import {Link} from 'react-router'
import store from '../../../flux/store'

class LoginEditer extends React.Component {
    constructor(props,context){
        super(props,context)
        
    }
    
    render(){
        return(
            <div className="login_editer">
            	
		            	<Link to="/login" className="login"><div className="login_inner">
			            	<div className="loginn">
			            		<img src="https://img1.doubanio.com/icon/user_normal.jpg"/>
			            		<div>登陆发广播</div>
			            	
			            	</div>
			            	<div className="editer">
			            	<div><i className="iconfont">&#xe602;</i></div>
			            	<div><i className="iconfont">&#xe627;</i></div>
			            	</div>
		            	</div></Link>
 
            </div>
        )
    }
   
}
export default LoginEditer