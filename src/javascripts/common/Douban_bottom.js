import React from 'react'



class Douban_bottom extends React.Component {
    constructor(props,context){
        super(props,context)     
       
    }	
	render(){
		return(
			 
                <div className="downd-app">
                	<div className="info clearfix">
                		<img className="appimg"src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" alt=""/>
                		<div>
                		<strong>豆瓣</strong>
                		<p>我们的精神角落</p>
                		</div>               	
                	</div>
                	<a href="">去 App Store 免费下载 iOS 客户端</a>				   
			</div>
		)
	}
}
   
export default Douban_bottom