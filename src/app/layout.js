import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata = {
  title: 'Alessandra Palma - O segredo da Hipertrofia',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-BR">
        <head>
          <meta name="facebook-domain-verification" content="wf0639o3i1c24kd9bancqg0cag93pm" />
        </head>
        <body>{children}</body>
        <GoogleTagManager gtmId="GTM-592SBCFM" />
      </html>
    </>
  )
}
