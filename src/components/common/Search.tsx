import { Search as SearchIcon } from "lucide-react"
import { useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

interface SearchProps {
  onSearchSubmit?: () => void
}

const Search = ({ onSearchSubmit }: SearchProps) => {
  const { t } = useTranslation("common")
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      onSearchSubmit?.()
      setQuery("")
      inputRef.current?.blur() 
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t("search")}
          className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none"
        />
        <button
          type="submit"
          className="absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-800"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}

export default Search
