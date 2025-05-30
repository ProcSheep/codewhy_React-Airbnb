import { useEffect, useState } from "react";
import { throttle } from "underscore";

export function useScrollPosition(){
  // 记录位置
  const [scrollX,setScrollX] = useState(0)
  const [scrollY,setScrollY] = useState(0)

  useEffect(() => {
    // 节流
    const handleScroll = throttle(function(){
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    },100)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll',handleScroll)
    }
  })

  return {scrollX,scrollY}
}