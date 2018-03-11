import React from 'react'
import {Link,hashHistory} from 'react-router'

class Search extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="searchs">
                <div className="search_header">
                    <Link to="/close-nav" className="close-nav">关闭</Link>
                    <form action="/search" method="GET">
                        <input name="query" type="search"/>
                    </form>
                </div>
                <ul>
                    <li>
                        <div>
                            <a href="#" target="_blank">
                                <strong>电影</strong>
                                <span>影院热映</span>
                            </a>
                            <a href="#" target="">
                                <strong>同城</strong>
                                <span>周末活动</span>
                            </a>
                            <a href="#" target="">
                                <strong>阅读</strong>
                                <span>电子书</span>
                            </a>
                            <a href="#" target="">
                                <strong>东西</strong>
                                <span>心爱之物</span>
                            </a>
                        </div>
                    </li>
                     <li>
                        <div>
                            <a href="#" target="_blank">
                                <strong>电视</strong>
                                <span>正在热播</span>
                            </a>
                            <a href="#" target="">
                                <strong>小组</strong>
                                <span>志趣相投</span>
                            </a>
                            <a href="#" target="">
                                <strong>游戏</strong>
                                <span>虚拟世界</span>
                            </a>
                            <a href="#" target="">
                                <strong>FM</strong>
                                <span>红心歌单</span>
                            </a>
                        </div>
                    </li>
                     <li>
                        <div>
                            <a href="#" target="_blank">
                                <strong>图书</strong>
                                <span>畅销排行</span>
                            </a>
                            <a href="#" target="">
                                <strong>音乐</strong>
                                <span>新碟榜</span>
                            </a>
                            <a href="#" target="">
                                <strong>应用</strong>
                                <span>玩手机</span>
                            </a>
                            <a href="#" target="">
                                <strong >市集</strong>
                                <span>购买原著</span>
                            </a>
                        </div>
                    </li>
                </ul>
                <div className="navBottom">
                    <div className="nav-item">
                        <a className="toReg" href="#">注册帐号</a>
                        <a className="toLogin" href="#">登录豆瓣</a>
                    </div>
                    <div className="nav-item">
                        <a className="toPC" href="#">使用桌面版</a>
                        <a className="toApp">使用豆瓣App</a>
                    </div>
                </div>
            </div>
          
        )
    }
}
export default Search