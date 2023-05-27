import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const BHImageGrid = () => {
    const [pageDimensions, setPageDimensions] = useState(800)
    const [imgArr, setImgArr] = useState([])

    const imgSize = 50
    const len = Math.ceil(pageDimensions / 200)

    
    function getNumberArr(n, a=[]) {
        for (let i = 0; i < n; i++) {    
            // array of integers from 1 to 200
            const numbers = Array.from({ length: 200 }, (_, i) => "bh" + (i + 1) + ".jpeg")
            // randomize the order of the array
            numbers.sort(() => Math.random() - 0.5)
            a.push(numbers)
        }
        return a.flat()
    }
    
    const handleResize = () => {
        const w = Math.ceil(window.innerWidth / imgSize)
        const h = Math.ceil(window.innerHeight / imgSize) + 1
        setPageDimensions(Math.ceil(w * h))
    }

    useEffect(() => {
        if (typeof window === 'undefined') return
        
        window.addEventListener('resize', handleResize)
        
        handleResize()

        setImgArr(getNumberArr(len))

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <Image
                    className="object-cover w-full h-full"
                    src={"logo-3.jpg"}
                    width={250}
                    height={250}
                    alt="Picture of a black airplane with hair"
                />
            </div>
            <div className="w-full h-full overflow-hidden grid grid-cols-[repeat(40,_minmax(0,_1fr))]">
                {imgArr.map((n,i) => (
                    <div key={i+"-"+n+"-img"} className="opacity-50 overflow-hidden transition-all hover:scale-150 hover:opacity-100 hover:duration-0 hover:z-50 duration-1000 hover:rounded-sm">
                        <Image
                            className="object-cover w-full h-full"
                            src={n}
                            width={50}
                            height={50}
                            alt="Picture of a black airplane with hair"
                        />
                    </div>
                ))}
            </div>

        </>
    )
}