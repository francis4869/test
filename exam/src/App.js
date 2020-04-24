import React, { Component } from 'react';
import data from'./data.json';
import './static/card.css'
import DefaultLayout from './components/defaultLayout'
import FormLayout from './components/formLayout'

export default  class App extends Component{
  constructor(props){
    super(props)
    this.state={
      data,
      defaultLayout:true
    }
  }
  changeToDefaultLayout=()=>{   
    this.setState({
      defaultLayout :true
    })
  }
  changeToFormLayout=()=>{   
    this.setState({
      defaultLayout :false
    })
  }
  componentDidMount(){
   
  }
  render(){
    let {defaultLayout } = this.state
    return (
      <div className="App">
         <div className='container'>
             <div className="layout_bar" >
               <button className={defaultLayout? 'current':''} onClick={this.changeToDefaultLayout} >卡片</button>
               <button className={defaultLayout? '':'current'} onClick={this.changeToFormLayout} >列表</button>
             </div>
             <div className="card_bin">
               {
                 defaultLayout?
                    <DefaultLayout data={this.state.data} />: <FormLayout data={this.state.data} />
               }
             </div>
         </div>
      </div>
    );
  }
}


