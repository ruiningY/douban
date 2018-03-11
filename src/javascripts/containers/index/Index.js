import React from 'react'
import MovieHeader from '../../common/MovieHeader'
import Section_header from './components/Section_header'
import Index_content1 from './components/Index_content1'
import Download_app from '../../common/Download_app'

class Index extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="fullheight index">
                <MovieHeader/>
               	<Section_header/>
               	<Index_content1/>
                 <Download_app/>
                
            </div>
        )
    }
}
export default Index