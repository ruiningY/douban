
import React from 'react'
//import fetch from '../../../fetch'
import jsonp from 'jsonp'
import {Link} from 'react-router'
console.log(fetch)
class MoveSection extends React.Component {
    constructor(props,context){
        super(props,context)
        
        this.state = {
        	searchHot:[]
        	
        }
    }

	getSearchHot(props){
		 let that = this
		 
		jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&callback&start=0&count=8&loc_id=108288&_=0',{
			param:'callback',			
		},(err,data)=>{
			//console.log(data)
			that.setState({searchHot:data.subject_collection_items})
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
			return<div className="swiper-slide" key={i}>
			
			<Link to={'/moviedetail/'+item.id} className="moviedetail">
                <img className="banner_img"src={item.cover.url} alt="..."/>
                <div className="caption">
                <h3 className="move_title">{item.title}</h3>
                <span>豆瓣评分</span>
                <span>{item.rating?item.rating.value:'暂无评分'}</span>
                  
               </div>
            </Link>
            </div>
		})
	}
	render(){
		return(
			 <div className="moveSection">
				<header >
					<h2 >影院热映</h2>
					<Link to="hot_movie" className="hot_movie">更多</Link>
				
				</header>
                <div className="swiper-container movie-search-hot">
				    <div className="swiper-wrapper">
				        	{this.showSearchHot()}			        
				    </div>
				</div>
			</div>
		)
	}
	 componentDidMount(){
    	this.mySwiper = new Swiper ('.movie-search-hot', {		    
			   freeMode : true,
			   slidesPerView : 'auto',
			   freeModeSticky : true ,
			   freeModeMomentumRatio:0.3
		  }) 
		  
		 
    }
    componentDidUpdate(){
    	this.mySwiper.update()
    }
}
export default MoveSection