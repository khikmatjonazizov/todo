import React, { useState } from "react";
import s from './app.module.css';
import { useUnit } from 'effector-react'
import { Link, RouterProvider } from "atomic-router-react";

// @ts-expect-error no type
import { routes, router } from 'utils'

export const App: React.FC = () => {
  const [homeIsOpen] = useUnit([routes.home.$isOpened])
  return (
    <RouterProvider router={router}>
      <header className={s['header']}>
        <h1 className={s['header__logo']}>Todo</h1>
        <nav className={s['header__nav']}>
          <Link className={s['header__nav-link']} data-active={homeIsOpen} to={routes.home}>
            Home
          </Link>
        </nav>
      </header>
    </RouterProvider>
  )
}