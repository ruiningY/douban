
import React from 'react'
//import fetch from '../../../fetch'
import jsonp from 'jsonp'

class BookSection extends React.Component {
    constructor(props,context){
        super(props,context)
        
        this.state = {
        	searchHot:[]
        	
        }
    }

	getSearchHot(props){
		 let that = this
		//  http://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=&start=0&count=8&loc_id=0&_=1509372424654
		jsonp('http://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=&start=0&count=8&loc_id=0&_=1509372424654',{
			param:'callback',			
		},(err,data)=>{
			//  console.log(data)
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
					// console.log(item.rating)
			return<div className="swiper-slide" key={i}>
				
			<div>
                <img className="banner_img"src={item.cover.url} alt="..."/>
                <div className="caption">
                <h3 className="book_title">{item.title}</h3>
		
                 <span>豆瓣评分：{item.rating?item.rating.value:"暂无"}</span>        
               </div>
            </div>
            </div>
		})
	}
	render(){
		return(
			 <div className="Booksection">
				<header >
					<h2 >最受关注图书|虚构类</h2>
					<a href="">更多</a>
				
				</header>
                <div className="swiper-container book-new-hot">
				    <div className="swiper-wrapper">
				        	{this.showSearchHot()}			        
				    </div>
				</div>
			</div>
		)
	}
	 componentDidMount(){
    	this.mySwiper = new Swiper ('.book-new-hot', {		    
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
export default BookSection