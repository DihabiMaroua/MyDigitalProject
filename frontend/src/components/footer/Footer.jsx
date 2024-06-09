import Button from '../buttons/Button'
import './footer.css'

function Footer () {
  return (
    <footer class="main">
      <div className="container py-5">
        <div class="row">
            <div class="col-md-3">
              <a href='/' class="text-logo"><img src="../src/assets/logo.png" class="img-fluid" width="50px"/> Dallya</a>
              <p class="bs-white">Inscrivez-vous à la newsletter</p>
              <div class="input-group input-group-sm mb-3">
                <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
              </div>
              <p><a href="" className="btn btn-1">S'INSCRIRE</a></p>
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
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className='bs-white'>© 2024 Copyright - Tous droits réservés</p>
          </div>
          <div className="col-md-3 offset-md-3 d-flex justify-content-between">
            <a href=''><img src="../src/assets/instagram.png" width="25px"/></a>
            <a href=''><img src="../src/assets/tiktok.png" width="25px"/></a>
            <a href=''><img src="../src/assets/facebook-f.png" width="20px"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
