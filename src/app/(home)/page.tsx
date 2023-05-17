import Image from 'next/image'
import { User } from 'lucide-react'
import logoNlwSpaceTime from '../../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-800 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <span className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </span>
        </a>
        <div className="space-y-5">
          <Image
            src={logoNlwSpaceTime}
            alt="Logo NLW space time, com a cor predominante violeta"
          />
          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            href=""
            className="hover: inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-shadow hover:shadow-md hover:shadow-green-700"
          >
            Cadastrar lembraça
          </a>
        </div>

        <footer className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            className="underline hover:text-gray-100"
            target="_blank"
            href="https://rocketseat.com.br"
            rel="noreferrer"
          >
            Rocketseat
          </a>
        </footer>
      </section>
      <section className="bg-coverp-16 flex flex-col bg-[url(../assets/bg-stars.svg)]">
        <div className="flex flex-1 items-center justify-center">
          <span className="w-96 text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a className="cursor-pointer underline transition-all duration-200 hover:text-gray-50">
              criar agora!
            </a>
          </span>
        </div>
      </section>
    </main>
  )
}
