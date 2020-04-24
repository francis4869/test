import React, { Component } from 'react'

export default class DefaultLayout extends Component {
    constructor(props){
       super(props);
       this.state={
           data:props.data
       }
    }
    render() {
        let {data}= this.state
        return (
            <div>
                 <ul className='card_order'>
                  { 
                    data.map((ele,idx)=>{
                      return <li key={idx} className="card_item"> 
                      <img src={[require("../static/image/image.jpg")]} alt="" />
                      <div className='card_center'>
                        <h4>{ele.prjName}</h4>
                        <h5>项目经理：{ele.prjManager}</h5>
                        <h5>立项日期：{ele.prjStartDate.substr(0,10)}</h5>
                        <p style ={{display:ele.taskCount==null? 'none':"block"}}>
                          <span>任务：{ele.taskCount}</span>
                          <span>完成：{ele.taskDoneCount}</span>
                          <span>运行：{ele.taskDoingCount}</span>
                        </p>
                      </div>
                      <div className='item_progress'>
                        <p>
                          <span className={ele.projectStatus==='processing'?'progress_state1':'progress_state2'}></span>
                          <span> {ele.projectStatus==='processing'?'进行中':'审批中'}</span>
                         
                        </p>                 
                      </div>
                      <div>
                         <img className='star_img' src={[require("../static/image/star.jpg")]} alt='' />  
                      </div>
                      </li>
                    })
                  }
               </ul>
            </div>
        )
    }
}
