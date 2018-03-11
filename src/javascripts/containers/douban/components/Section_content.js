import React from 'react'
//import fetch from '../../../fetch'


class Section_content extends React.Component {
    constructor(props,context){
        super(props,context)     
       
    }	
	render(){
		return(
			 
                <div className="sectionContent">
                	<header>
                		<h2>分类浏览</h2>
                	</header>
				    <ul className="contents clearfix">
				        <li><a href="">经典<span>></span></a></li>
				        <li><a href="">冷门佳片<span>></span></a></li>
				         <li><a href="">豆瓣高分<span>></span></a></li>
				        <li><a href="">动作<span>></span></a></li>
				        <li><a href="">喜剧<span>></span></a></li>
				        <li><a href="">爱情<span>></span></a></li>
				        <li><a href="">悬疑<span>></span></a></li>
				        <li><a href="">恐怖<span>></span></a></li>
				        <li><a href="">科幻<span>></span></a></li>
				        <li><a href="">治愈<span>></span></a></li>
				        <li><a href="">文艺<span>></span></a></li>
				        <li><a href="">成长<span>></span></a></li>
				        <li><a href="">动画<span>></span></a></li>
				        <li><a href="">华语<span>></span></a></li>
				        <li><a href="">欧美<span>></span></a></li>
				        <li><a href="">韩国<span>></span></a></li>
				        <li><a href="">日本<span>></span></a></li>
				        <li><a href=""><span>></span></a></li>
				                
				        		
				        	
				    </ul>
			
			</div>
		)
	}
}
   
export default Section_content