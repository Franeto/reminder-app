"use client"

import { useEffect, useState } from "react"

interface useCountdownProps {
   initialTime: number
   cb: ()=>void
   interval: number
}

export const useCountdown = ({initialTime,cb,interval = 1000}:useCountdownProps) =>{
   const [time, setTime] = useState(initialTime)

   useEffect(()=>{
      const customInterval = setInterval(()=>{
         setTime((prev)=> prev-interval)
      }, interval)

      if (time===0) cb()

      return () => clearInterval(customInterval)
   }, [time,cb,interval])

   return time
}