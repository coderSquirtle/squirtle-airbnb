import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import AppHeader from '@/componnents/app-header'
import AppFooter from './componnents/app-footer'
import { useScroll } from './hooks'


const App = memo(() => {
  useScroll()
  return (
    <div className="app">


      <AppHeader />
      <Suspense fallback="loading">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App