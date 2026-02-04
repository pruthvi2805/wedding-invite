import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

async function generate() {
    const fontData = fs.readFileSync(path.join(process.cwd(), 'public/font.ttf'));

    const svg = await satori(
        {
            type: 'div',
            props: {
                style: {
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#8B1538', // Deep maroon
                    backgroundImage: 'radial-gradient(circle at center, #D4AF37 0%, transparent 20%)',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                },
                children: [
                    {
                        type: 'div',
                        props: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px solid #D4AF37',
                                padding: '40px 60px',
                                borderRadius: '8px',
                                backgroundColor: 'rgba(139, 21, 56, 0.8)',
                            },
                            children: [
                                {
                                    type: 'h1',
                                    props: {
                                        style: {
                                            fontSize: '72px',
                                            color: '#D4AF37', // Temple gold
                                            fontFamily: 'Cormorant Garamond',
                                            margin: '0 0 20px 0',
                                        },
                                        children: 'Groom & Bride',
                                    },
                                },
                                {
                                    type: 'p',
                                    props: {
                                        style: {
                                            fontSize: '32px',
                                            color: '#FAF7F0', // Cream
                                            fontFamily: 'Cormorant Garamond',
                                            margin: '0',
                                        },
                                        children: 'Save the Date',
                                    },
                                },
                                {
                                    type: 'p',
                                    props: {
                                        style: {
                                            fontSize: '24px',
                                            color: '#D4AF37',
                                            fontFamily: 'Cormorant Garamond',
                                            marginTop: '10px',
                                        },
                                        children: '12th August 2024',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Cormorant Garamond',
                    data: fontData,
                    weight: 500,
                    style: 'normal',
                },
            ],
        }
    );

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    fs.writeFileSync(path.join(process.cwd(), 'public/og-image.jpg'), pngBuffer);
    console.log('OG Image generated at public/og-image.jpg');
}

generate().catch(console.error);
