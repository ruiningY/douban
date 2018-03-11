
import React from 'react'

import WaiMaiHeader from './components/WaiMaiHeader'

class WaiMai extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="fullheight waimai">
                <WaiMaiHeader/>
            </div>
        )
    }
}

export default WaiMai