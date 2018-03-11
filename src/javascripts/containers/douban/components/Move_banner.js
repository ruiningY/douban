
import React from 'react'
import axios from 'axios'

class Move_banner extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        	banners:[]
        }
    }
    
	getBannerDate(props){
		let that = this
		console.log(that)
		axios.get('http://api.douban.com/v2/movie/in_theaters', {
			
		 }).then(function (data) {
		    console.log(data);
		    that.setState({
		    	banners:data.subjects
		    })
		  })
		 console.log(失败); 
		  
	}
	componentWillReceiveProps(props){
		this.getBannerDate(props)
	}
	showBanners(){
		var arr = []
		let banners = this.state.banners
		if(banners.length==0){
			return arr;
		}		
		for (var i =0;i<banners.length;i++) {
			if(i%9==0){
				let _arr = []
				for (var j = i;j<i+8;j++) {
					if(banners[j]){
						_arr.push(
							<div className="banner__info" key={j}>
								
								{banners[j].title}
								console.log(banners[j].title)
							</div>
						)
					}					
				}
				arr.push(
					<div className="swiper-slide" key={i}>
						{_arr}
					</div>
				)
			}
		}
		return arr;
	}
    render(){
        return (
        	<div className="movebanner">
            <div className="swiper-container move-banner">
			    <div className="swiper-wrapper">
			        {this.showBanners()}
			    </div>
			    <div className="swiper-pagination"></div>
			</div>
			</div>
        )
    }
    
    componentDidUpdate(){
    	new Swiper('.move-banner',{
    		loop:true,
    		pagination:'.swiper-pagination'
    	})
    }
}


export default Move_banner