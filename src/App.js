import React from 'react'
import Covid from './component/Covid'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <Navbar title={'COVID-19'} home={'Home'} about={'About'}/>
      <Covid/>
    </>
  )
}

export default App

