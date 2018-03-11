import React from 'react'
//import fetch from '../../../fetch'


class Good_move extends React.Component {
    constructor(props,context){
        super(props,context)     
        
    }	
	render(){
		return(
			 <div className="interests">
				<header>
					<h2>
					发现好电影	
					</h2>
				</header>
                <div className="swiper-container interest-good-movie">
				    <ul className="swiper-wrapper">			        
		        		<li className="swiper-slide"><a className="first"href="">同时入选IMDB250和豆瓣电影250的电影</a></li>
		        		<li className="swiper-slide"><a href="">女孩们的故事【电影】</a></li>
		        		<li className="swiper-slide"><a href="">用电【影】来祭奠逝去的岁月</a></li>
		        		<li className="swiper-slide"><a href="">女孩们的故事【电影】</a></li>
		        	</ul>
		        	<ul className="swiper-wrapper">	
		        		<li className="swiper-slide"><a href="">使用 App 【找电影】功能</a></li>
		        		<li className="swiper-slide"><a href="">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
		        		<li className="swiper-slide"><a href="">美国生活面面观</a></li>
		        		<li className="swiper-slide"><a href="">2015终极期待</a></li>
		        		<li className="swiper-slide"><a href="">经典韩国电影——收集100部</a></li>
				        	
				    </ul>
				</div>
			</div>
		)
	}

     componentDidMount(){
    	this.mySwiper = new Swiper ('.interest-good-movie', {		    
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
export default Good_move