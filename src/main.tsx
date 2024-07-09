import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// @ts-ignore
import { register } from 'swiper/element/bundle'

import * as page from './pages'


import './style/index.sass'
import './style/theme.sass'

register()


const router = createBrowserRouter([
    {
        path: '/',
        Component: page.Template,
        children: [
            {
                path: '',
                Component: page.Home,
            },
            {
                path: 'catalog',
                children: [
                    {
                        path: ':cat?',
                        index: true,
                        Component: page.catalog.Home,
                        loader: async () => {
                            page.catalog.fetch()
                            return true
                        }
                    },
                    {
                        path: 'product',
                        Component: page.catalog.Product,
                        children: [
                            {
                                path: ':id',
                                Component: page.catalog.ProductItem,
                            }
                        ]
                    },
                ]
            }
        ]
    },
])



ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
