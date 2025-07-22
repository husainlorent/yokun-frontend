import { AlignJustify, X, Search } from "lucide-react"
import { useState } from "react"
import Logo from '@/components/common/Logo'
import { Link } from "react-router-dom"
import { useCategories } from "@/hook/useCategory"

const MobileMenu = () => {

  const { data: categories } = useCategories()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>

      <button onClick={toggleMenu} className="p-2 cursor-pointer">
        <AlignJustify />
      </button>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}


      <div className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>

        <div className="flex items-center justify-between p-4 border-b border-border-grey">
          <Logo />
          <button onClick={toggleMenu} className="p-2 cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 border-b border-border-grey">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-0 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <nav className="p-4">
          {categories?.map((link, index) => (
            <Link
              key={index}
              to="posts"
              className="block py-3 px-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default MobileMenu