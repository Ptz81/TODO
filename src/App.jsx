import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { AppBar } from './components/AppBar/AppBar'
import { Layout } from './components/Layout/Layout'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'


function App() {

  return (
    <Layout>
      <NavBar />
      <AppBar/>
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default App
