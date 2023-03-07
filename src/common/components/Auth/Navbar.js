import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav
      className="relative mx-4 my-3 flex flex-col"
    >
      <button
        type="button"
        onClick={() => router.back()}
        className="group flex justify-center items-center mt-5 lg:mt-8 ml-3 lg:ml-0 w-max max-w-max bg-dark text-white px-6 py-3 rounded-xl text-sm shadow shadow-dark/20 transition-all duration-300 ease-in"
      >
        <i className="fa-solid fa-arrow-left mr-3 group-hover:-translate-x-2 transition-all duration-300 ease-in-out"></i> Back
      </button>
    </nav>
  )
}
