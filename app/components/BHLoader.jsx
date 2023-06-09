import Image from 'next/image'
import React from 'react'

export const BHLoader = ({ opacity }) => {
    
    return (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center transition-opacity duration-1000"
            style={{opacity:opacity}}
        >
            <div className="flex flex-col justify-center items-center w-44 h-44 relative">
                <div className="absolute pointer-events-none inset-0 w-44 h-44 border-8 border-x-yellow-400 border-y-red-600 animate-spin rounded-full"></div>
                <div className="rounded-full relative">
                    <Image
                        className="rounded-full overflow-hidden flex-grow-0 z-50"
                        src={"logo-3.jpg"}
                        width={145}
                        height={145}
                        alt="Black airplane logo"
                    />
                </div>
            </div>
        </div>
    )
}