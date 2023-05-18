import { cookies } from 'next/headers'
import Copyright from './components/Copyright'
import LoginWithGithub from './components/LoginWithGithub'
import HeroContent from './components/HeroContent'
import EmptyMemories from './components/EmptyMemories'
import Profile from './components/Profile'

export default function Home() {
  const isAuthenticate = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-800 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />

        {isAuthenticate ? <Profile /> : <LoginWithGithub />}

        <HeroContent />
        <Copyright />
      </section>
      <section className="bg-coverp-16 flex flex-col bg-[url(../assets/bg-stars.svg)]">
        <EmptyMemories />
      </section>
    </main>
  )
}
