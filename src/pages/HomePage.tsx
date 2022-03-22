import React from 'react'
import { About } from '../Components/Pages/About'
import { Home } from '../Components/Pages/Home'
import { Works } from '../Components/Pages/Works'

export function HomePage() {
  return (
    <>
      <Home/>
      <About/>
      <Works/>
    </>
  )
}
