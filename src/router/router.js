import Home from '../views/home'
import Item from '../views/item'
import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
class Router extends React.Component {
    render() {
        return (
            <>
            <Redirect to='/home' from='/'/>
                <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/item' component={Item}/>
                </Switch>
            </>
        )
    }
}
export default Router
