



require("./styles/app.scss")
//////////////////////////////////

const React = require('react')
const ReactDOM = require('react-dom')
import { Router , Route , hashHistory,browserHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router'

import App from './javascripts/App'
 //const App = require("./javascripts/App")
  import Index from './javascripts/containers/index/Index'
 import Movies from './javascripts/containers/douban/Movies'
 import Spread from './javascripts/containers/spread/Spread'
 import Detail from './javascripts/containers/detail/Detail'
 import Hot_movie from './javascripts/containers/detail/Hot_movie'
 import Line_movie from './javascripts/containers/detail/Line_movie'
  import New_movie from './javascripts/containers/detail/New_movie'
   import Login from './javascripts/containers/login/Login'
   import Book from './javascripts/containers/book/Book'
   import Group from './javascripts/containers/group/Group'
   import Search from './javascripts/containers/search/Search'
   import MovieDtail from './javascripts/containers/detail/MovieDtail'
   import MovieDtail2 from './javascripts/containers/detail/MovieDtail2'
   import MovieDtail3 from './javascripts/containers/detail/MovieDtail3'
   
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		<IndexRedirect to='/index'/>
			<Route path="/index" component={Index}></Route>
			<Route path="/header_movie" component={Movies}></Route>
			<Route path="/header_spread" component={Spread}></Route>
			<Route path="/detail/:id" component={Detail}></Route>
			<Route path="/hot_movie" component={Hot_movie}></Route>
			<Route path="/line_movie" component={Line_movie}></Route>
			<Route path="/new_movie" component={New_movie}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/header_book" component={Book}></Route>
			<Route path="/header_group" component={Group}></Route>
			<Route path="/header_search" component={Search}></Route>
			<Route path='/close-nav' component={Index}></Route>
			<Route path="/moviedetail/:id" component={MovieDtail}></Route>
			<Route path="/moviedetail2/:id" component={MovieDtail2}></Route>
			<Route path="/moviedetail3/:id" component={MovieDtail3}></Route>
		</Route>
	</Router>
	,document.getElementById("app"))


