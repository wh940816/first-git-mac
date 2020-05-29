// 入口
import React,{Component} from 'react'
import 'antd/dist/antd.less'
import {BrowserRouter,Route} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'


export default class App extends Component{
    render(){
        return(
            <BrowserRouter> 
                    <Route path='/login' component={Login}/> 
                    <Route path='/'  exact component={Admin}/>   {/*exact是Route下的一个属性，react路由会匹配到所有能匹配到的路由组件，exact能够使得路由的匹配更严格一些。*/ }
            </BrowserRouter>
                
        )
    }
}