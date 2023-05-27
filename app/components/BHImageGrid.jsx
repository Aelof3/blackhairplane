import Image from 'next/image'
import { useEffect, useState } from 'react'

export function BHImageGrid() {
    const [opacity, setOpacity] = useState(0)

    const [pageDimensions, setPageDimensions] = useState(800)

    const imgSize = 50
    const len = Math.ceil(pageDimensions / 200)

    // array of integers from 1 to 200
    const numbers = Array.from({ length: 200 }, (_, i) => "bh" + (i + 1) + ".jpeg")

    function getNumberArr(n, a=[]) {
        for (let i = 0; i < n; i++) {    
        // randomize the order of the array
        numbers.sort(() => Math.random() - 0.5)
        a.push(numbers)
        }
        return a.flat()
    }
    
    const handleResize = () => {
        const w = window.innerWidth / imgSize
        const h = window.innerHeight / imgSize
        setPageDimensions(Math.ceil(w * h))
    }

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1)
        }, 2000)

        if (typeof window === 'undefined') return
        
        window.addEventListener('resize', handleResize)
        
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const imgArr = getNumberArr(len)

    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden transition-opacity"
                style={{opacity: opacity}}
            >
                <Image
                    className="object-cover w-full h-full"
                    src={"logo-3.jpg"}
                    width={250}
                    height={250}
                    alt="Picture of a black airplane with hair"
                />
            </div>
            <div className="w-full h-full overflow-hidden grid grid-cols-[repeat(40,_minmax(0,_1fr))] transition-opacity"
                style={{opacity: opacity}}
            >
                {imgArr.map((n,i) => (
                    <div key={i+"-"+n+"-img"} className="opacity-50 overflow-hidden transition-all hover:scale-150 hover:opacity-100 hover:duration-0 hover:z-50 duration-1000 hover:rounded-sm">
                        <Image
                            className="object-cover w-full h-full"
                            src={n}
                            width={50}
                            height={50}
                            alt="Picture of a black airplane with hair"
                            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYGBgYGBgYGBgYGBgYGBgYGBgYHSggGBolHRgXITEhJSkrLi4uGB8zODMsNygtLisBC'
                            placeholder='blur'
                        />
                    </div>
                ))}
            </div>

        </>
    )
}