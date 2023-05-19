import { getUser } from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left ">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="Image profile"
        className="h-10 w-10 rounded-full"
      />
      <p className="text-lg leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block w-fit cursor-pointer text-sm text-red-400 transition-colors hover:text-red-600"
        >
          Quero sair!
        </a>
      </p>
    </div>
  )
}
