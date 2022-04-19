import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </HashRouter>
  )
}

export default Routes
