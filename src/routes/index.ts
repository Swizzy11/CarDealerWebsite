import { ComponentType } from "react"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { Registration } from "../pages/Registration"
import { Profile } from "../pages/Profile"


interface IRoute {
    /**
     * Идентификатор роута
     */
    id: string | number
    /**
     * Адрес страницы
     */
    path: string
    /**
     * Компонент страницы
     */
    component: ComponentType
  }


  export const routes: IRoute[] = [
    {
      id: 'main',
      path: '/',
      component: Home
    },
    {
      id: 'login',
      path: '/login',
      component: Login
    },
    {
      id: 'registration',
      path: '/registration',
      component: Registration
    },
    {
      id: 'profile',
      path: '/profile',
      component: Profile
    }
  ]
