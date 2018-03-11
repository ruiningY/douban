import React from 'react'

import jsonp from 'jsonp'

class Receive_content extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        	rests:[]
        }
    }
	getStatusDate(props){
		let that = this
		jsonp('http://m.douban.com/rexxar/api/v2/status/anonymous_timeline?max_id=&ck=&for_mobile=1',{
			param:'callback',			
		},(err,data)=>{
			//console.log(data)
			that.setState({rests:data.items})
			//console.log(data.items.status)
		})
		
	}
	
	componentWillReceiveProps(props){
		this.getStatusDate(props)
	}
	componentWillMount(){
		this.getStatusDate()
	}
	
	
   showStatusHot(){
   	
		return this.state.rests.map((item,i)=>{
			return<li key={i}>
				<div>
					<div className="desc">
					<a href=""><img src="https://img3.doubanio.com/icon/up95805238-16.jpg"/></a>
					<a href="">
						<div>
							<strong>豆瓣<span>{item.status.activity}</span></strong>
						</div>
						<div className="itemstamp">{item.status.create_time}</div>
					</a>
					</div>
				
					<a href="">
							<div className="content">
								<div className="title">{item.status.card?item.status.card.title:''}</div>
								<div>{item.status.text?item.status.text:item.status.card.subtitle}</div>									
								
							</div>
						</a>
				</div>
				<div className="picture">
					<img src={item.status.images.length!=0?item.status.images[0].normal.url:null}/>
				</div>
				<div className="info">
					<div><i className="iconfont">&#xe601;</i><span>{item.status.like_count}</span></div>
					<div><i className="iconfont">&#xe606;</i><span>{item.status.comments_count}</span></div>
					<div><i className="iconfont">&#xe600;
</i><span>{item.status.reshares_count}</span></div>
					<div><i className="iconfont">&#xe60b;</i></div>
					
				</div>
	
            </li>
		})
	}
	render(){
		return(
			 <ul className="status-list">				          				   
        		{this.showStatusHot()}			        
			</ul>
		)
	}
	componentDidMount(){
	}

}

export default Receive_content