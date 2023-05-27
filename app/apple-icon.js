import { ImageResponse } from 'next/server'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 1024,
  height: 576,
}

export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <Image
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        src="apple-icon.png"
        alt="OG"
        width={1024}
        height={576}
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}