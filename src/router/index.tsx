import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../Layouts/MainLayout'
import ManageLayout from '../Layouts/ManageLayout'
import QuestionLayout from '../Layouts/QuestionLayout'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import NotFound from '../pages/notFound'
import { ListQuestion } from '../pages/manage/listQuestion'
import Trash from '../pages/manage/trash'
import Star from '../pages/manage/star'
import Stat from '../pages/question/stat'
import Edit from '../pages/question/edit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <ListQuestion />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'stat/:id',
        element: <Stat />,
      },
    ],
  },
])

export default router

export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'
