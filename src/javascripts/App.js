// const React = require('react')
// console.log(React)
// const App = React.createClass({
//     render:function () {
//        return (
//            <div>
//                <p>hahahahahaha</p>
//            </div>
//        )
//     }
// })
//import React from 'react'
//import Movies from './containers/douban/Movies'
//
//class App extends React.Component {
//  constructor(props,context){
//      super(props,context)
//  }
//  render(){
//      return(
//          <div className="fullheight">
//              <Movies/>
//              
//              </div>
//      )
//  }
//}

import React from 'react'

class App extends React.Component {
    constructor(props,context){
        super(props,context)
    }

    render(){
        return (
            <div className="fullheight">
               {this.props.children}
            </div>
        )
    }
}
export default App
