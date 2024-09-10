
import './App.css';
import Lista from './components/Lista'
import Formulario from './components/Formulario'
import Titulo from './components/Titulo'

function App() {
  return (
    < >
      <div className='contenedor'>
        <Titulo />
        <Formulario />
        <Lista />
      </div>
    </>
  )
}

export default App
