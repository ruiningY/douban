


const Dispatcher = require('flux').Dispatcher

const dispatcher = new Dispatcher()

import store from './store'

dispatcher.register(function  (action) {
	
	switch(action.type){
		case 'CHANGE_USERINFO':store.changeUserInfo(action.userInfo);break;
	}
})


export default dispatcher