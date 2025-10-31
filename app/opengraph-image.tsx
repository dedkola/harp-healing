import { ImageResponse } from 'next/og'
import fs from 'fs/promises'
import path from 'path'

export default async function Image() {
    // Read from public directory correctly
    const logoPath = path.join(process.cwd(), 'public', 'enhanced_to_krea2.png')
    const logoData = await fs.readFile(logoPath)
    const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={logoSrc} height="100" />
            </div>
        )
    )
}