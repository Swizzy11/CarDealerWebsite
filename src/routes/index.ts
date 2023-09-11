import { ComponentType } from "react"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"
import { Registration } from "../pages/Registration"


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
      id: 'Login',
      path: '/start',
      component: Login
    },
    {
      id: 'end',
      path: '/end',
      component: Registration
    }
  ]
