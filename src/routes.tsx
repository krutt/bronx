import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Transaction } from './pages/Transaction'
import { Swap } from './pages/Swap'
import { Invoice } from './pages/Invoice'

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Swap />,
      },
      {
        path: '/transaction',
        element: <Transaction />,
      },
      {
        path: '/invoice',
        element: <Invoice />,
      },
    ],
  },
])
