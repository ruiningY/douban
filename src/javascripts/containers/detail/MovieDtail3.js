import React from 'react'
import axios from 'axios'
import MovieHeader from '../../common/MovieHeader'
import OpenReceive from '../spread/components/OpenReceive'
import Download_app from '../../common/Download_app'
import jsonp from 'jsonp'
class MovieDtail3 extends React.Component {
    constructor(props,context){
        super(props,context)
         this.state = {
        	newmoviedetail:[]
        	
        }
    }	
	getmovieDetail( props){		
		let that = this
		//console.log(that.props.params.id)
		
		axios.get('../../../../public/json/newmovie.json?id='+this.props.params.id)
		
		.then((res)=>{
		  
		    that.setState({newmoviedetail:res.data})
		    //console.log(res.data)
		   		   
		})		
	}	
componentWillMount(){
		this.getmovieDetail()
	}
	
	
	showMovieDetail(){
		var arr=[]
		 this.state.newmoviedetail.map((item,i)=>{	
			if(item.id==this.props.params.id){		
				arr.push(<div className="detail_content" key={i}>					
				<h1 className="title">{item.title}</h1>
				<section>
					<div className="left">
						<p className="rating">
							
							<strong>{item.rating}</strong>
							<span>{item.article}</span>
						</p>		
						<p className="meta">{item.content}</p>		
					</div>			
					<div className="right">
						<img src={item.url} alt=""/>
					</div>							
				</section>
				<div className="simple">{item.pro_title}</div>
				<div className="produce">{item.produce}</div>					       
            </div>)			
			 }
		})
		 return arr        
	}
	render(){
		return(
			<div className="moviedetail">
				<MovieHeader/>
				<OpenReceive/>
				<div className="contents">
				
				{this.showMovieDetail()}
				</div>
				<Download_app/>
			</div>
		)
	}
	
}
export default MovieDtail3