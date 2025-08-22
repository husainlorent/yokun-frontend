import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface SearchProps {
  onSearchSubmit?: () => void
}

const Search = ({ onSearchSubmit }: SearchProps) => {
  const { t } = useTranslation('common')
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
      onSearchSubmit?.()
      setQuery("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='relative'>
      <div className='relative'>
        <input
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('search')}
          className='w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none'
        />
        <button
          type='submit'
          className='absolute top-1/2 right-2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600'
        >
          <SearchIcon className='h-5 w-5' />
        </button>
      </div>
    </form>
  )
}

export default Search
