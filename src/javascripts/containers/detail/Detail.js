import React from 'react'

import MovieHeader from '../../common/MovieHeader'
import OpenReceive from '../spread/components/OpenReceive'
import Download_app from '../../common/Download_app'
import jsonp from 'jsonp'
class Detail extends React.Component {
    constructor(props,context){
        super(props,context)
         this.state = {
        	detailhot:[]
        	
        }
    }
    
	
	getDetail( props){
		let that = this
		jsonp('https://m.douban.com/rexxar/api/v2/selection/themes/explore?themes=21%2C14%2C17%2C18%2C6%2C15&for_mobile=1?id='+this.props.params.id,(err,data)=>{
			console.log(data)
			that.setState({detailhot:data.items})
			console.log(data)
		})
		
	}
	componentWillReceiveProps(props){
		this.getDetail(props)
	}
	componentWillMount(){
		this.getDetail()
	}
	
	
	showDetailHot(){
		return this.state.detailhot.map((item,i)=>{
			return <div className="detail_content" key={i}>
					<section>
						<h1 className="title">{item.title}</h1>
						<div className="from"><span>{item.target.author.name}</span><span></span></div>
					</section>
					<div>
						<div className="icon wechat"></div>
						<div className="icon qq"></div>
						<div className="icon weibo"></div>
						<div className="icon more"></div>
					</div>
					<section>
						<div>
							<span></span>
							<a href=""></a>
						</div>
						<div className="content">
							<div className="content_title">"{item.theme.desc}</div>
							<div className="content_img"><img src={item.target.cover_url}/></div>
							<p className="desc">{item.target.desc}</p>
							<div className="subject-wrapper"></div>
							<p></p>
							<div className="separator"></div>
						</div>
					</section>
                  
              
            
            </div>
		})
	}
	
	
	

	render(){
		return(
			<div className="detail">
				<MovieHeader/>
				<OpenReceive/>
				<div className="contents">
				
				{this.showDetailHot()}
				</div>
				<Download_app/>
			</div>
		)
	}
	
}
export default Detail