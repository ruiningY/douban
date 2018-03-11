import React from 'react'
import MovieHeader from '../../common/MovieHeader'
import MoveSection from './components/MoveSection'
import MoveSection2 from './components/MoveSection2'
import MoveSection3 from './components/MoveSection3'
import Good_move from './components/Good_move'
import Section_content from './components/Section_content'
import Download_app from './components/Download_app'
import Move_banner from './components/Move_banner'
class Movies extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="fullheight movie">
                <MovieHeader/>
                <MoveSection/>
                <MoveSection2/>
                 <MoveSection3/>
                 <Good_move/>
                 <Section_content/>
                 <Download_app/>
                
            </div>
        )
    }
}
export default Movies