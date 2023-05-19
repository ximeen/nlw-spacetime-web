import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJam } from 'next/font/google'
import HeroContent from './(home)/components/HeroContent'
import LoginWithGithub from './(home)/components/LoginWithGithub'
import Profile from './(home)/components/Profile'
import Copyright from './(home)/components/Copyright'
import '../styles/globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const bai = BaiJam({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai',
})

export const metadata = {
  title: 'NLW spacetime',
  description:
    'Uma cápsula do tempo construida com NextJs, Tailwindcss e typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticate = cookies().has('token')

  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${bai.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-800 opacity-50 blur-full" />
            <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />

            {isAuthenticate ? <Profile /> : <LoginWithGithub />}

            <HeroContent />
            <Copyright />
          </section>
          <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
