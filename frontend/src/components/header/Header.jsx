import Button from '../buttons/Button'
import './header.css'

function Header () {
  return (
    <header className='main'>
      <div class="container">
        <div className="row">
          <div className="col-md-2">
            <a href='/' class="text-logo"><img src="../src/assets/logo.png" class="img-fluid" width="50px"/> Dallya</a>
          </div>
          <div className="col-md-9 offset-1">
            <nav>
              <a href='/filtre' class='btn-header2'>Trouver le cadeau idéal 
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="currentColor">
                <path d="M7.60345 1.40741C6.60362 1.40741 5.7931 2.19505 5.7931 3.16667C5.7931 4.13828 6.60362 4.92593 7.60345 4.92593H9.41379V9.14815H1.81035C0.81052 9.14815 0 8.3605 0 7.38889V6.68519C0 5.71357 0.810519 4.92593 1.81034 4.92593H4.89356C4.54696 4.42274 4.34483 3.81764 4.34483 3.16667C4.34483 1.41776 5.80376 0 7.60345 0C8.62711 0 9.54053 0.458699 10.1379 1.17613C10.7353 0.458699 11.6487 0 12.6724 0C14.4721 0 15.931 1.41776 15.931 3.16667C15.931 3.81764 15.7289 4.42274 15.3823 4.92593H19.1897C20.1895 4.92593 21 5.71357 21 6.68519V7.38889C21 8.3605 20.1895 9.14815 19.1897 9.14815H10.8621V4.92593H12.6724C13.6722 4.92593 14.4828 4.13828 14.4828 3.16667C14.4828 2.19505 13.6722 1.40741 12.6724 1.40741C11.6726 1.40741 10.8621 2.19505 10.8621 3.16667V4.92593H9.41379V3.16667C9.41379 2.19505 8.60327 1.40741 7.60345 1.40741Z"/>
                <path d="M9.41379 10.5556H1.44828V16.8889C1.44828 18.0548 2.4209 19 3.62069 19H9.41379V10.5556Z"/>
                <path d="M10.8621 10.5556V19H17.3793C18.5791 19 19.5517 18.0548 19.5517 16.8889V10.5556H10.8621Z"/>
              </svg>
              </a>
              <a href='/suggestion' class='btn-header'>Suggestion</a>
              <a href='/about' class='btn-header'>About</a>
              <a href='/blog' class='btn-header'>Blog</a>
              <a href='/authentication' class='btn-header'>Mon Compte</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
