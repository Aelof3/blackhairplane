import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

export const contentType = 'image/png'

const image = fetch(new URL('./og-1024x576.png', import.meta.url)).then((res) =>
  res.arrayBuffer(),
)

export async function GET() {
  const imageData = await image
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={image}
          width="1024"
          height="576"
        />
      </div>
    ),
    // ImageResponse options
    {
      width: 1024,
      height: 576,
    }
  )
}