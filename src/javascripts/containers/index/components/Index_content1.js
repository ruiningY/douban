
import React from 'react'
import jsonp from 'jsonp'
import IndexItem from '../../../common/IndexItem'
class Index_content1 extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        	restts:[]
        }
    }
    //https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1
    
	getRestsDate(props){
		let that = this
		jsonp('https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',{
			param:'callback',			
		},(err,data)=>{
			console.log(data)
			that.setState({restts:data.recommend_feeds})
			//console.log(data.items.status)
		})
		
	}
	componentWillReceiveProps(props){
		this.getRestsDate(props)
	}
	componentWillMount(){
		this.getRestsDate()
	}
	
	
    render(){
        return (
            <div className="indexcontent">
			    {
			    	this.state.restts.map((item,i)=>{
			    		return <IndexItem item={item} key={item.id}/>
			    	})
			    }
			</div>
        )
    }

}

export default Index_content1