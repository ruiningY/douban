import React from 'react'
//import fetch from '../../../fetch'


class Discoverbook extends React.Component {
    constructor(props,context){
        super(props,context)     
        
    }	
	render(){
		return(
			 <div className="interests">
				<header>
					<h2>
					发现好图书
					</h2>
				</header>
                <div className="swiper-container interest-good-book">
				    <ul className="swiper-wrapper">			        
		        		<li className="swiper-slide"><a href="">小波看书</a></li>
		        		<li className="swiper-slide"><a href="">村上春树周边</a></li>
		        		<li className="swiper-slide"><a href="">我凭名字认定你了</a></li>
		        		<li className="swiper-slide"><a href="">不可饶苏的女人们</a></li>
		        	</ul>
		        	<ul className="swiper-wrapper">	
		        		<li className="swiper-slide"><a href="">爱欲书</a></li>
		        		<li className="swiper-slide"><a href="">他们还在写侦探小说</a></li>
		        		<li className="swiper-slide"><a href="">人生识字始忧患</a></li>
		        		<li className="swiper-slide"><a href="">诗歌书店</a></li>
				        	
				    </ul>
				</div>
			</div>
		)
	}

     componentDidMount(){
    	this.mySwiper = new Swiper ('.interest-good-book', {		    
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
export default Discoverbook