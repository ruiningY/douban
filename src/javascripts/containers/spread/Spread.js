import React from 'react'
import MovieHeader from '../../common/MovieHeader'
import OpenReceive from './components/OpenReceive'
import LoginEditer from './components/LoginEditer'
import Receive_content from './components/Receive_content'
import Download_app from '../../common/Download_app'
class Spread extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="fullheight spread">
            
            	<MovieHeader className="header_spread"/>     	
            	<OpenReceive/>
            	<div className="card">
            		<LoginEditer/>
            		<Receive_content/>
            		<Receive_content/>
            		<Download_app/>
            	</div>
               
                
            </div>
        )
    }
}
export default Spread