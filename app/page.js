'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { BHImageGrid } from './components/BHImageGrid'
import { BHLoader } from './components/BHLoader'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={"w-screen h-screen relative overflow-hidden flex flex-col"}>
      
      <BHLoader />

      <BHImageGrid />
    </main>
  )
}
