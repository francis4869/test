import React, { Component } from 'react'

export default class FormLayout extends Component {
    constructor(props){
        super(props);
        this.state={
            data:props.data
        }
     }
    render() {
        let {data} = this.state
		
        return (
            <div>
                 <div className='item_form' >
                 <table cellSpacing="0px">
                  <thead>
                    <tr>
                    <td>所属品类</td>
                    <td>项目类别</td>
                    <td>项目编号</td>
                    <td>项目名称</td>
                    <td>项目状态</td>
                    <td>项目经理</td>
                    <td>所属部门</td>
                    <td>项目计划时间</td>
                    </tr>
                  </thead>
                  <tbody > 
                      {
                        data.map((ele,idx)=>{
                          return  <tr key={idx}>
                            <td className='star_content'>
                            <img src={[require("../static/image/star.jpg")]} alt='' />  
                            <span className='product_Category'>
                            {ele.productCategory}
                            </span>       
                              </td>
                            <td>{ele.prjCategory}</td>
                            <td></td>
                            <td>{ele.prjName}</td>
                            <td>
                            <span className={ele.projectStatus==='processing'?'progress_state1':'progress_state2'}></span>
                              {ele.projectStatus==='processing'?'进行中':'审批中'}</td>
                            <td>{ele.prjManager}</td>
                            <td>{ele.department}</td>
                            <td>{ele.prjStartDate.substr(0,10)}
                            &nbsp;-&nbsp;
                            {ele.prjStartDate.substr(0,10)}
                            </td>
                           </tr> }
                        )
                      }
                  </tbody>
                 </table>
               </div>
            </div>
        )
    }
}
