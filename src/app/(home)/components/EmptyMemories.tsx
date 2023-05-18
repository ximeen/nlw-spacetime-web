export default function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <span className="w-96 text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a{' '}
        <a className="cursor-pointer underline transition-all duration-200 hover:text-gray-50">
          criar agora!
        </a>
      </span>
    </div>
  )
}
