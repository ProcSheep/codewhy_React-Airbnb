import React, { memo } from 'react'
import routes from '@/router'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App