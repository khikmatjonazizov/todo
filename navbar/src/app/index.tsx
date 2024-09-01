import React, { useState } from "react";
import s from './app.module.css';
import { useUnit } from 'effector-react'

// @ts-expect-error no type
import { routes } from 'utils'

export const App: React.FC = () => {
  const [homeIsOpen] = useUnit([routes.home.$isOpened])
  const handleClick = (link: 'home') => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    switch(link) {
      case 'home': routes.home.open()
    }
  }
  return (
    <header className={s['header']}>
      <h1 className={s['header__logo']}>Todo</h1>
      <nav className={s['header__nav']}>
        <a className={s['header__nav-link']} data-active={homeIsOpen} href="/" onClick={handleClick('home')}>Home</a>
      </nav>
    </header>
  )
}