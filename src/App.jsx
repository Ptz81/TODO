
import NavBar from './components/NavBar/NavBar'
import { AppBar } from './components/AppBar/AppBar'
import { Layout } from './components/Layout/Layout'
import { TaskForm } from './components/TaskForm/TaskForm'
import { TaskList } from './components/TaskList/TaskList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Layout>
        <ToastContainer />
      <NavBar />
      <AppBar/>
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default App
