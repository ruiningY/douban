import React from 'react'
//import fetch from '../../../fetch'
import jsonp from 'jsonp'

class Bookstore extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            searchHot: [],
            searchHot1: []
        }
    }
    getSearchHot(props) {
        let that = this
            //  http://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=&start=0&count=8&loc_id=0&_=1509372424654
        jsonp('http://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?os=ios&callback=&start=0&count=8&loc_id=0&_=1509421805868', {
            param: 'callback',
        }, (err, data) => {
            // console.log(data)
            that.setState({ searchHot: data.subject_collection_items },
                // {searchHot1:data.header}
            )

        })
    }
    componentWillReceiveProps(props) {
        this.getSearchHot(props)


    }

    componentWillMount() {
        this.getSearchHot()
    }

    showSearchHot() {

        return this.state.searchHot.map((item, i) => {

            return <div className = "swiper-slide" key={i}>
                        <div >
                            <img className = "banner_img" src = { item.cover.url } alt = "..." />
                            <div className = "caption">
                                <h3 className = "book_title">{ item.title }</h3>
                                 <span>图书价格： { item.price } </span>        
                            </div> 
                        </div> 
                    </div>
        })
    }


    render() {
        // console.log(this.state.searchHot)
        return ( 
            <div className = "Booksection" >
                <header>
                    <h2> 豆瓣书店 </h2>
                     <a href = ""> 更多</a> 
                </header>

                <div className = "typicalBook" >
                    <img className = "cover"src = "https://img3.doubanio.com/view/freyr_page_photo/raw/public/2252.jpg"
                        alt = "丰子恺艺术四书" / >
                    <div className = "content" >
                        <div className = "title" >

                            <p className = "name" > 丰子恺艺术四书 </p> 
                            <span className = "price" > ¥269 </span>
                        </div> 
                        <p className = "infoWithoutReviewer"> 丰子恺的34讲艺术启蒙课 </p> 
                    </div>   
                </div>
                <div className = "swiper-container book-store-hot" >
                    <div className = "swiper-wrapper" > 
                        { this.showSearchHot() }
                    </div> 
                </div> 
            </div>
        )
    }
    componentDidMount() {
        this.mySwiper = new Swiper('.book-store-hot', {
            freeMode: true,
            slidesPerView: 'auto',
            freeModeSticky: true,
            freeModeMomentumRatio: 0.3
        })


    }
    componentDidUpdate() {
        this.mySwiper.update()
    }
}
export default Bookstore