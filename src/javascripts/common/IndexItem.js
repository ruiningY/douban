
import React from 'react'

import {Link} from 'react-router'
class IndexItem extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        	
        }
    }
    render(){
        return (
            <Link to={"detail/"+this.props.item.id} className="content-item">
			   <div>
			   	<div><img src={this.props.item.target.cover_url
}/></div>
			   	<h3>{this.props.item.title}</h3>
			   
			   	<p>{this.props.item.target.desc}</p>
			   	
			   
			   </div>
			    <div className="fromm">
			    <span>by{this.props.item.target.author.name}</span>
			    <span>{this.props.item.source_cn}</span>
			    </div>
				
			    
			   
			</Link>
        )
    }

}

export default IndexItem