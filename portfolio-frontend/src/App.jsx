import { useState } from 'react'
import NavBar from './components/navBar/nav'
import Greeting from './components/intro/greeting'
import LeetCodeDashboard from './components/leetcode/LeetCodeDashboard'
import CodeChefDashboard from './components/codechef/CodeChefDashboard'
import Project from './components/Projects/Project'
import ProjectHeader from './components/Projects/projectHeader'
import Contact from './components/contact/contact'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <NavBar />
      <Greeting />
      <div id="leetcode">
        <LeetCodeDashboard />
      </div>
      <CodeChefDashboard />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <ProjectHeader />
      </div>
      <Project />
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App
