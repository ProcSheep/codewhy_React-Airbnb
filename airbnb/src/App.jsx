import React, { memo, Suspense } from 'react'
import routes from '@/router'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <Suspense fallback='loading'>
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App