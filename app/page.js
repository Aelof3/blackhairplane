'use client'

import { useState, useEffect } from 'react'
import { BHImageGrid } from './components/BHImageGrid'
import { BHLoader } from './components/BHLoader'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 2000)
  }, [])

  return (
    <main className={"w-screen h-screen relative overflow-hidden flex flex-col"}>
      {isLoaded && <BHImageGrid />}
      
      {showLoader && <BHLoader opacity={isLoaded ? 0 : 1}/>}
    </main>
  )
}
