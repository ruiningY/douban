import React from 'react'
import jsonp from 'jsonp'

class Groupdetail extends React.Component{
    constructor(props,context){
        super(props.context)
        this.state = {
        	searchHot:[],
        	searchHot2:[]      	
        }
    }

    getSearchHot(){
		 let that = this
		jsonp('http://m.douban.com/rexxar/api/v2/group/rec_groups_for_newbies?ck=&for_mobile=1',{
			param:'callback',			
		},(err,data)=>{
			console.log(data)
			that.setState({searchHot:data.rec_groups[0].classified_groups})
			
		})
	}	
    showSearchHot(){
    	var that = this
    	var arr = []
		this.state.searchHot.forEach((item1,i)=>{        
				arr.push(<section className="groups" key={i}>
                    <header>
                        <p>{item1.name}</p>
                    </header>
                     { this.showSearchHot2(item1)}
                    <div className="more-group">
                        <a href="#">更多相关小组</a>
                    </div>
                </section>)         
        })
		return arr
	}

 showSearchHot2(item1){
 	var arr = []
			item1.groups.forEach((item,i)=>{

				arr.push(<div className="section-content" key={i}>
                        <ul className="group-list">  
                            <li>
                                <a href="#" className="group">
                                    <div className="group-meta">
                                            <img className="group-icon" src={item.avatar} alt="Edward Norton"/>
                                            <span className="group-name">{item.name}</span>
                                            <span className="group-member">{item.member_count}人</span>
                                        </div>
                                        <div className="group-topic">
                                       
                                            <span className="topic-title">{item.desc_abstract}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>)
			})

		return arr
	}
	componentWillMount(){
		this.getSearchHot();
    }
    render(){
        return(
            <div className="groupdetail">
                {this.state.searchHot.length!=0? this.showSearchHot():''}
            </div>    
        )
    }
}

export default Groupdetail