import React from 'react'

import {Link} from 'react-router'
class Section_header extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
        	
            <div className="sectionheader">
               <ul>
	               	<li><Link to="/hot_movie" className="hot_movie">影院热映</Link></li>
	               	<li><a to="">生活在别处</a></li>
	               	<li><a to="">豆瓣时间</a></li>
	               	<li><a to="">使用豆瓣app</a></li>
	               	
               </ul>
                
            </div>
        )
    }
}
export default Section_header