import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { RouteError } from './components/common/RouteError'
import Posts from './pages/posts/Posts'
import NewsDetail from './pages/NewsDetail'
import PostDetail from './pages/posts/postDetail/PostDetail'
import AllNews from './pages/AllNews'

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <RouteError />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'all-news',
                    element: <AllNews />
                },
                {
                    path: 'news/:id',
                    element: <NewsDetail />
                },
                {
                    path: 'posts/:categoryId',
                    element: <Posts />
                },
                {
                    path: 'post/:postId',
                    element: <PostDetail />
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}
export default AppRouter
