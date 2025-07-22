import { QueryClientProvider } from '@tanstack/react-query'
import AppRouter from './Router'
import { queryClient } from './utils/queryClient'
function App() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
            </QueryClientProvider>
        </div>
    )
}
export default App
