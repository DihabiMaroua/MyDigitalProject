import Button from '../forms/buttons/Button'
import './header.css'

function Header () {
  return (
    <header className='main'>
      <nav>
        <a href='/'>Home</a>
        <a href='/filtre'>Filtre</a>
        <a href='/suggestion'>Suggestion</a>
        <a href='/about'>About</a>
        <a href='/authentication'>
          <Button>
            Connexion
          </Button>
        </a>
      </nav>
    </header>
  )
}

export default Header
