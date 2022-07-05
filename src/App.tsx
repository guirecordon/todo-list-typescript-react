import { Header } from './Components/Header'
import { Main } from './Components/Main'

import './global.css'


function App() {

  return (
    <div>
      <Header />
      <div className='wrapper'>
        <Main />
      </div>
    </div>
  )
}

export default App
