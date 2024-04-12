import Button from '../buttons/Button'
import './header.css'

function Header () {
  return (
    <header className='main'>
      <nav>
        <a href='/' class='btn-header'>Home</a>
        <a href='/suggestion' class='btn-header'>Suggestion</a>
        <a href='/filtre' class='btn-header'>Filtre</a>
        <a href='/about' class='btn-header'>About</a>
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
