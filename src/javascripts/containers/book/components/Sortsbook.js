import React from 'react'
//import fetch from '../../../fetch'


class Sortsbook extends React.Component {
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
				        <li><a href="">小说<span>></span></a></li>
				        <li className="content-list"><a href="">爱情<span>></span></a></li>
				         <li><a href="">历史<span>></span></a></li>
				        <li className="content-list"><a href="">外国文学<span>></span></a></li>
				        <li><a href="">青春<span>></span></a></li>
				        <li className="content-list"><a href="">励志<span>></span></a></li>
				        <li><a href="">随笔<span>></span></a></li>
				        <li className="content-list"><a href="">传记<span>></span></a></li>
				        <li><a href="">推理<span>></span></a></li>
				        <li className="content-list"><a href="">旅行<span>></span></a></li>
				        <li><a href="">奇幻<span>></span></a></li>
				        <li className="content-list"><a href="">经管<span>></span></a></li>
				                
				        		
				        	
				    </ul>
			
			</div>
		)
	}
}
   
export default Sortsbook