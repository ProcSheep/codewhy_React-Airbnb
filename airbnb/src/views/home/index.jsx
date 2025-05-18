import hyRequest from '@/service'
import React, { memo, useEffect, useState } from 'react'

const home = memo(() => {
  // 简单使用,后面的网络请求会融入到redux中
  // 定义状态 
  const [highscore, setHightScore] = useState({})

  // 网络请求代码,类似Mount
  useEffect(() => {
    hyRequest.get({ url: '/home/highscore' }).then(res => {
      // console.log(res)
      setHightScore(res)
    })
  }, [])

  return (
    <div>home
      {/* 简单测试 */}
      <h2>{highscore.title}</h2>
      <h4>{highscore.subtitle}</h4>
      <ul>
        {/* 异步初始没有数据,使用可选链 */}
        {
          highscore?.list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default home