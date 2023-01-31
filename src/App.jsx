import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import GetAxios from './components/GETAxios'
import PostAxios from './components/POSTAxios'

function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} width="120px" />
      </div>
      <h2>Primeiro Projeto React com Vite</h2>
      <Form/>
      <NovaTarefa/>
      <GetAxios/>
      <PostAxios/>
    </div>
  )
}
export default App