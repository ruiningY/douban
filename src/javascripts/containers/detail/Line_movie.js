import React from 'react'
import MovieHeader from '../../common/MovieHeader'

import Download_app from '../../common/Download_app'
import jsonp from 'jsonp'
class Line_movie extends React.Component {
    constructor(props,context){
        super(props,context)
         this.state = {
        	searchHot:[]
        	
        }
    }
    
    
    
    getSearchHot(props){
		 let that = this
		 
		jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&for_mobile=1&callback&start=0&count=18&loc_id=108288&_=1509524458862',{
			param:'callback',			
		},(err,data)=>{
			console.log(data)
			that.setState({searchHot:data.subject_collection_items
})
		})
	}
	componentWillReceiveProps(props){
		this.getSearchHot(props)
	}
	componentWillMount(){
		this.getSearchHot()
	}
	
	showSearchHot(){
		return this.state.searchHot.map((item,i)=>{
			return <li className="line_content" key={i}>
			
                <img className="banner_img"src={item.cover.url} alt="..."/>
                <div className="caption">
                <h3 className="move_title">{item.title}</h3>
                <span>{item.rating.count}</span>
                <span>{item.rating.value}</span>
                  
               </div>
            
            </li>
		})
	}
	
    render(){
        return(
            <div className="fullheight line_movie">
            
            	<MovieHeader className="header_spread"/> 
            	<h1>免费在线观影</h1>
            		<ul className="moveSection">
           		{this.showSearchHot()}	
            		</ul>
            		
            		<Download_app/>  
                
            </div>
        )
    }
}
export default Line_movie