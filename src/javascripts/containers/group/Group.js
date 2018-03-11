import React from 'react'
import MovieHeader from '../../common/MovieHeader'
import Groupdetail from './components/Groupdetail'
import Douban_bottom from '../../common/Douban_bottom'

class Group extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="fullheight group">
            
            	<MovieHeader className="header_group"/>
            	<Groupdetail/>
                <Douban_bottom/>
                
            </div>
        )
    }
}
export default Group