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
              <p className='title-footer'>Dallya</p>
              <p><a className='btn-footer' href='/filtre'>Trouver une idée cadeau</a></p>
              <p><a className='btn-footer' href='/favoris'>Favoris</a></p>
              <p><a className='btn-footer' href='/cagnotte'>Cagnotte</a></p>
              <p><a className='btn-footer' href='/blog'>Blog</a></p>
              <p><a className='btn-footer' href='/authentification'>Mon compte</a></p>
              <p><a className='btn-footer' href='/about'>A propos</a></p>
            </div>
            <div class="col-md-4 offset-md-1">
              <p className='title-footer'>Assistance</p>
              <p><a className='btn-footer' href='/politique-confidentialites'>Politique de confidentialités</a></p>
              <p><a className='btn-footer' href='/help'>Centre d'aide</a></p>
              <p><a className='btn-footer' href='/mentions-legales'>Mentions légales</a></p>
              <p><a className='btn-footer' href='/delete-account'>Supprimer son compte</a></p>
            </div>
        </div></div>
    </footer>
  )
}

export default Footer
