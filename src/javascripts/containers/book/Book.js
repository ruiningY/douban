
import React from 'react'
import MovieHeader from '../../common/MovieHeader'
import BookSection from './components/BookSection'
import BookSection1 from './components/BookSection1'
import Bookstore from './components/Bookstore'
import Discoverbook from './components/Discoverbook'
import Sortsbook from './components/Sortsbook'
import Douban_bottom from '../../common/Douban_bottom'

class Book extends React.Component {
     constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="fullheight book">
                <MovieHeader className="header_book"/>
                <BookSection/>
                <BookSection1/>
                <Bookstore/>
                <Discoverbook/>
                <Sortsbook/>
                <Douban_bottom/>
            </div>
        )
    }
}

export default Book