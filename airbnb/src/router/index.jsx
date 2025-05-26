import React from "react";
import { Navigate } from "react-router-dom";

// 懒加载,异步加载,需要在main.jsx中额外配置Suspense
const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const Entire = React.lazy(() => import('@/views/entire'))
const NotFound = React.lazy(() => import('@/views/notfound'))
const Demo = React.lazy(() => import('@/views/demo'))


const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/demo',
    element: <Demo/>
  },
  {
    path: '*',
    element: <NotFound />
  }
]


export default routes