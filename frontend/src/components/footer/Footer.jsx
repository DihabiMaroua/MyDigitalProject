import Button from '../buttons/Button'
import './footer.css'

function Footer () {
  return (
    <footer class="main">
      <div className="container">
        <div class="row">
            <div class="col-md-3">
              <a href='/' class="text-logo"><img src="../src/assets/logo.png" class="img-fluid" width="50px"/> Dallya</a>
              <p class="bs-white">Inscrivez-vous à la newsletter</p>
            </div>
            <div class="col-md-3 offset-md-1">
              <p className='bs-white'>Dallya</p>
              <p className='bs-white'><a>Trouver une idée cadeau</a></p>
              <p className='bs-white'><a>Favoris</a></p>
              <p className='bs-white'><a>Cagnotte</a></p>
              <p className='bs-white'><a>Blog</a></p>
              <p className='bs-white'><a>Mon compte</a></p>
              <p className='bs-white'><a>A propos</a></p>
            </div>
            <div class="col-md-4 offset-md-1">
              <p className='bs-white'>Assistance</p>
              <p className='bs-white'><a>Politique de confidentialités</a></p>
              <p className='bs-white'><a>Centre d'aide</a></p>
              <p className='bs-white'><a>Mentions légales</a></p>
              <p className='bs-white'><a>Supprimer son compte</a></p>
            </div>
        </div></div>
    </footer>
  )
}

export default Footer
