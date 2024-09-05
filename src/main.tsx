import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/style.scss'
import './global.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* <QueryClientProvider client={queryClient}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        {/* </QueryClientProvider> */}
    </React.StrictMode>
)