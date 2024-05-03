import PropTypes from 'prop-types'
import ProductsList from '../components/products/ProductList'

function Home () {
    return (
      <>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-4 offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="position-image" width="161" height="170" viewBox="0 0 161 170" fill="none">
              <path d="M56.0661 20.2783C80.7657 28.6904 104.065 41.3702 124.751 58.0051C122.998 69.3311 122.091 80.9304 122.086 92.7521C122.081 107.689 123.53 122.294 126.298 136.42C105.202 119.428 81.9381 106.853 57.6343 98.583C52.4219 72.2639 52.0604 45.797 56.0681 20.2696L56.0661 20.2783Z" fill="#FFD0B8" />
              <path d="M17.5742 99.4613C30.3164 103.801 42.3363 110.342 53.0078 118.924C52.1036 124.767 51.6354 130.751 51.6329 136.849C51.6302 144.555 52.3781 152.09 53.8061 159.377C42.9227 150.611 30.9212 144.124 18.3832 139.858C15.6942 126.28 15.5077 112.626 17.5753 99.4568L17.5742 99.4613Z" fill="#FFD0B8" />
            </svg>
            <h1 className="h1">Trouvez un cadeau parfait tout au long de l’année</h1>
          </div>
          <div className="col-md-5 card">
            <p className="titre-home text-center">À qui est destiné le cadeau ?</p>
            <div className="row justify-content-center mt-5">
              <div className="col-md-3 text-center">
                <img src="../src/assets/anniversaire.svg" class="img-fluid" width="100px" />
                <p>Garçon</p>
              </div>
              <div className="col-md-3 text-center">
                <img src="../src/assets/anniversaire.svg" class="img-fluid" width="100px" />
                <p>Fille</p>
              </div>
              <div className="col-md-3 text-center">
                <img src="../src/assets/anniversaire.svg" class="img-fluid" width="100px" />
                <p>Autre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className='titre-home'>Sélection pour la fêtes des pères</h2>
        <div className='row'>
          <div className='col-md-3 col-6'>
            <img src="../src/assets/produit-1.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Chaussettes brodées “born to be dad”</p>
            <p className='prix-produit'>16€</p>
          </div>
          <div className='col-md-3 col-6'>
            <img src="../src/assets/produit-2.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Peigne moustache</p>
            <p className='prix-produit'>9,99€</p>
          </div>
          <div className='col-md-3 col-6'>
            <img src="../src/assets/produit-3.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Trousse de toilette ballon de rugby</p>
            <p className='prix-produit'>34,99€</p>
          </div>
          <div className='col-md-3 col-6'>
            <img src="../src/assets/produit-4.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Sweat “Papa poulpe”</p>
            <p className='prix-produit'>75€</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <img src="../src/assets/produit-5.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Huile barbe et visage</p>
            <p className='prix-produit'>20€</p>
          </div>
          <div className="col-md-3 col-6">
            <img src="../src/assets/produit-6.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Cadre bouchon addict</p>
            <p className='prix-produit'>19,99€</p>
          </div>
          <div className="col-md-3 col-6">
            <img src="../src/assets/produit-7.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Mug herbier papa</p>
            <p className='prix-produit'>12,99€</p>
          </div>
          <div className="col-md-3 col-6">
            <img src="../src/assets/produit-8.png" className='img-fluid' />
            <p className='titre-produit mb-0'>Coffret de 6 casses têtes - Guerrier Japonais</p>
            <p className='prix-produit'>19,99€</p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-green p-5">
        <div className='row'>
          <div className="col-md-8 m-auto">
            <h2 className='titre-blanc'>Dallya, votre accompagnatrice <br></br> pour le cadeau parfait</h2>
            <p className='bs-white'>À l’approche des occasions spéciales, trouver le cadeau idéal pour nos proches peut parfois relever du défi. Entre les goûts variés, les intérêts changeants et les contraintes budgétaires, il est facile de se sentir dépassé. Dallya, notre accompagnatrice dans la recherche du cadeau parfait, simplifie et offre des suggestions judicieuses et personnalisées pour vous permettre de trouver des cadeaux qui raviront vos proches à coup sûr.</p>
            <p className='bs-white'>Dallya a été conçu pour s’adapter à vos préférences uniques et à celles de vos proches. Elle utilise des algorithmes avancés pour comprendre vos goûts, vos intérêts et même vos relations, afin de vous proposer des cadeaux qui correspondent parfaitement à chaque occasion. </p>
            <p className='bs-white'>L’utilisation de Dallya est simple et intuitive. Dans un premier temps, vous êtes invité à répondre à quelques questions sur la personne à qui vous souhaitez offrir un cadeau. Ces questions couvrent une gamme de sujets, permettant à Iris de mieux cerner les goûts de votre destinataire. Ensuite, une sélection personnalisée de cadeaux potentiels, soigneusement adaptés à chaque individu, sera générée.</p>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Home
  