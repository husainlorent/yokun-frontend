// AppRouter.js - yaxshilangan LanguageWrapper
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { RouteError } from './components/common/RouteError'
import Posts from './pages/posts/Posts'
import PostDetail from './pages/postDetail/PostDetail'
import AllNews from './pages/AllNews'
import NewsDetail from './pages/newsDetail/NewsDetail'
import { useTranslation } from 'react-i18next'
import { useEffect, type ReactNode } from 'react'
import SearchResultPage from './pages/SearchResultPage'

const routes = [
  { index: true, element: <Home /> },
  { path: 'news', element: <AllNews /> },
  { path: 'news/:newsId', element: <NewsDetail /> },
  { path: 'posts/:categoryId', element: <Posts /> },
  { path: 'post/:postId', element: <PostDetail /> },
  { path: 'search', element: <SearchResultPage /> }
]

const LanguageWrapper = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation()

  useEffect(() => {
    const urlLang = window.location.pathname.startsWith('/kr') ? 'kr' : 'uz'
    const storedLang = localStorage.getItem('language') || 'uz'

    if (urlLang !== storedLang) {
      console.log('Switching language from URL:', urlLang)
      i18n.changeLanguage(urlLang)
    } else if (i18n.language !== urlLang) {
      console.log('Setting language from storage:', storedLang)
      i18n.changeLanguage(urlLang)
    }
  }, [i18n])

  return <>{children}</>
}

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <LanguageWrapper>
          <Layout />
        </LanguageWrapper>
      ),
      errorElement: <RouteError />,
      children: routes
    },
    {
      path: '/kr',
      element: (
        <LanguageWrapper>
          <Layout />
        </LanguageWrapper>
      ),
      errorElement: <RouteError />,
      children: routes
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter
