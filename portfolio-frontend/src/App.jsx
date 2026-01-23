import { useState } from 'react'
import NavBar from './components/navBar/nav'
import Greeting from './components/intro/greeting'
import LeetCodeDashboard from './components/leetcode/LeetCodeDashboard'
function App() {
  return (
    <>
      <NavBar/>
      <Greeting/>
      <LeetCodeDashboard/>
    </>
  )
}

export default App
