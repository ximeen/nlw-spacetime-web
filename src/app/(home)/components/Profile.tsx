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
      <span className="max-w-[140px] text-lg leading-snug">
        {name}
        <a href="block text-sm text-red-400 hover:text-red-500">Quero sair!</a>
      </span>
    </div>
  )
}
