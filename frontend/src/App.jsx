import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Router from './navigation/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <Header />
      <Router />
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
