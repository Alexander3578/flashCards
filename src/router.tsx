import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CreateLoginForm } from '@/components/auth/login/createLoginForm'
import { LoginForm } from '@/components/auth/login/loginForm'
import { useMeQuery } from '@/features/auth/api/auth-api'
import { DecksList } from '@/features/decksList/ui/decks'
import { LearnDeck } from '@/features/learnDeck'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm />,
    path: '/login',
  },
  {
    element: <CreateLoginForm />,
    path: '/login/registration',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksList />,
    path: '/',
  },
  {
    element: <LearnDeck />,
    path: '/learn/:deckId',
  },
]

function PrivateRoutes() {
  const { isSuccess } = useMeQuery()

  return isSuccess ? <Outlet /> : <Navigate to={'/login'} />
}

function PublicRoutes() {
  const { isSuccess } = useMeQuery()

  return isSuccess ? <Navigate to={'/'} /> : <Outlet />
}

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  {
    children: publicRoutes,
    element: <PublicRoutes />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
