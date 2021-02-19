import { useSelector } from 'react-redux'

import Game from './components/Game'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Welcome from './components/Welcome'

import 'react-toastify/dist/ReactToastify.css'
import './assets/css/main.min.css'

export default function App () {
  const { dataReducer } = useSelector(state => state)
  return (
    <div>
      <Header />
      {
        dataReducer.runing ?
        <>
          <Game />
          <Footer />
        </>
        : <Welcome />
      }
    </div>
  )
}