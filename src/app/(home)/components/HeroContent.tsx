import Image from 'next/image'
import logoNlwSpaceTime from '../../../assets/logo.svg'
import Link from 'next/link'

export default function HeroContent() {
  return (
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
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/memory/new"
        className="hover: inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-shadow hover:shadow-md hover:shadow-green-700"
      >
        Cadastrar lembraça
      </Link>
    </div>
  )
}
