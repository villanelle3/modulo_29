import './App.scss'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import { Container } from './styles'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </div>
  )
}

export default App
