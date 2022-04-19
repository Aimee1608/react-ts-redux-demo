import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import AnotherStore from './store/anotherStore'
import Routes from './routes'
import './common/style/style.css'
function App() {
  return (
    <div>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AnotherStore>
            <Routes />
          </AnotherStore>
        </ConnectedRouter>
      </Provider>
    </div>
  )
}
export default App
