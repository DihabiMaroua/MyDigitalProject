import PropTypes from 'prop-types'
import ProductsList from '../components/products/ProductList'
import GiftFilter from '../components/filtre/GiftFilter';

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
            <GiftFilter />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className='titre-home'>Sélection pour la fêtes des pères</h2>
        <div className='row'>
          <div className='col-md-3 col-6'>
            <a href=''></a>
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
            <h2 className='titre-blanc py-4'>Dallya, votre accompagnatrice <br></br> pour le cadeau parfait</h2>
            <p className='bs-white'>À l’approche des occasions spéciales, trouver le cadeau idéal pour nos proches peut parfois relever du défi. Entre les goûts variés, les intérêts changeants et les contraintes budgétaires, il est facile de se sentir dépassé. Dallya, notre accompagnatrice dans la recherche du cadeau parfait, simplifie et offre des suggestions judicieuses et personnalisées pour vous permettre de trouver des cadeaux qui raviront vos proches à coup sûr.</p>
            <p className='bs-white'>Dallya a été conçu pour s’adapter à vos préférences uniques et à celles de vos proches. Elle utilise des algorithmes avancés pour comprendre vos goûts, vos intérêts et même vos relations, afin de vous proposer des cadeaux qui correspondent parfaitement à chaque occasion. </p>
            <p className='bs-white'>L’utilisation de Dallya est simple et intuitive. Dans un premier temps, vous êtes invité à répondre à quelques questions sur la personne à qui vous souhaitez offrir un cadeau. Ces questions couvrent une gamme de sujets, permettant à Iris de mieux cerner les goûts de votre destinataire. Ensuite, une sélection personnalisée de cadeaux potentiels, soigneusement adaptés à chaque individu, sera générée.</p>
            <p className='text-center'><a href='/a-propos/' className='text-uppercase btn btn-1 text-center'>Découvrez l'origine de Dallya</a></p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-2 offset-md-1 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="89" viewBox="0 0 58 89" fill="none">
              <path d="M10.9322 25.8515C10.2104 26.5919 12.2472 29.8019 13.8798 31.7175C15.5019 33.6202 18.0899 35.8517 20.4889 37.1823C20.9351 37.4309 22.1688 38.0858 23.5888 39.287C24.2239 39.8228 24.754 40.3924 25.0638 40.6901C26.8276 42.4012 26.7436 45.2229 26.741 46.9574C26.7357 52.0339 26.2554 56.6806 25.9273 59.3418C19.8773 63.0023 13.8273 66.6628 7.77729 70.3232C7.68017 70.6365 7.56989 71.0429 7.47278 71.527C7.41241 71.8247 7.37047 72.0939 7.33898 72.3243C7.33898 72.3243 7.29698 72.6479 7.2681 72.9818C7.22611 73.5048 7.28388 75.0502 7.5621 77.116H51.8545C52.1039 76.6915 52.3479 76.1634 52.5133 75.5369C53.0933 73.3494 52.3112 71.4597 51.9542 70.7245C45.6155 66.7974 39.2794 62.8703 32.9407 58.9406C33.0246 54.2058 32.9879 50.7007 32.9407 48.3113C32.8855 45.5362 32.7779 42.7585 34.6703 40.7393C34.854 40.5425 34.9932 40.4234 36.2452 39.5355C40.5628 36.4834 42.0432 35.7016 44.0748 33.9205C46.1535 32.0981 47.298 31.0678 47.0749 29.9598C46.7835 28.5101 44.3188 27.7335 42.7544 27.5031C37.7832 26.7731 35.9958 30.8089 31.6203 29.9598C29.1872 29.4886 28.8539 28.0726 25.9772 27.9043C23.7803 27.7749 23.1608 28.5541 21.1477 28.8078C15.725 29.4912 11.8456 24.9066 10.9295 25.8489L10.9322 25.8515Z" fill="#FFD0B8" stroke="#FFD0B8" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M7.43268 9.90625C7.09322 15.8912 7.63688 23.8571 12.2024 30.4692C17.5797 38.2593 24.7994 38.7631 25.0405 43.6513C25.3381 49.6835 14.4728 51.4073 9.5088 62.5559C7.07598 68.0188 7.07352 73.4658 7.41791 77.1156" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M52.6861 9.90625C52.9041 15.824 52.2051 23.751 47.5222 30.4636C42.0977 38.2385 35.1323 38.9283 34.9343 43.844C34.6913 49.9454 45.3023 51.6058 50.2658 62.5416C52.7513 68.0186 52.7564 73.4747 52.4106 77.1156" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M53.4875 2H4.51248C2.75239 2 1.32556 3.16674 1.32556 4.60598V7.301C1.32556 8.74024 2.75239 9.90698 4.51248 9.90698H53.4875C55.2476 9.90698 56.6744 8.74024 56.6744 7.301V4.60598C56.6744 3.16674 55.2476 2 53.4875 2Z" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M51.9364 87.0009H6.0634C3.4581 87.0009 1.32556 84.7783 1.32556 82.059C1.32556 79.3398 3.4581 77.1172 6.0634 77.1172H51.9364C54.5417 77.1172 56.6744 79.3398 56.6744 82.059C56.6744 84.7783 54.5417 87.0009 51.9364 87.0009Z" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10"/>
            </svg>
            <p>Économisez du temps grâce à des suggestions pertinentes en quelques minutes seulement.</p>
          </div>
          <div className="col-md-2 offset-md-1 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="92" viewBox="0 0 140 92" fill="none">
              <path d="M91.1727 1H1.5V90.6727H91.1727V1Z" fill="#235B55" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M138.5 40.8555H73.7364V90.6736H138.5V40.8555Z" fill="white" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M96.5879 54.4091C96.5234 51.6267 96.6589 48.8251 96.917 46.0555C97.3171 41.7505 97.9688 37.0576 100.073 33.2078C101.002 31.5088 102.483 29.717 104.361 29.0246C106.771 28.1366 109.023 30.0247 110.356 31.8614C112.905 35.3747 113.831 40.106 114.56 44.286C115.144 47.6262 115.522 51.0208 115.667 54.4091C115.748 56.2587 118.652 56.2683 118.571 54.4091C118.423 51.008 118.035 47.6005 117.481 44.2412C116.696 39.4746 115.612 34.1406 112.686 30.1625C111.234 28.1911 109.14 26.3672 106.639 25.9825C103.825 25.5498 101.305 27.1173 99.4596 29.0951C96.1394 32.6532 95.0681 37.9808 94.4131 42.6256C93.8645 46.5171 93.5903 50.4759 93.6806 54.4091C93.7225 56.2619 96.6265 56.2683 96.5846 54.4091H96.5879Z" fill="#235B55"/>
              <path d="M28.9233 17.3594C28.8128 21.2697 29.1022 25.2095 29.6356 29.0806C30.4356 34.8938 31.8925 41.2432 35.8113 45.7976C37.8277 48.1419 40.7937 50.1199 43.8507 50.6627C47.5549 51.3198 50.9209 49.8224 53.7242 47.4912C58.3065 43.6822 60.362 37.2773 61.6953 31.6668C62.8076 26.9946 63.5133 22.1623 63.7702 17.3626C63.871 15.4696 60.9441 15.4761 60.8432 17.3626C60.6579 20.8676 60.1927 24.3692 59.5325 27.812C58.5114 33.1283 57.0804 39.0265 53.6721 43.3586C52.0493 45.4216 49.6396 47.2918 47.0281 47.7757C43.7401 48.3838 40.5269 46.53 38.3187 44.2021C34.6698 40.3539 33.395 34.4557 32.6178 29.3716C32.0129 25.422 31.743 21.3613 31.8568 17.3659C31.9121 15.4729 28.9851 15.4729 28.9299 17.3659L28.9233 17.3594Z" fill="white"/>
            </svg>
            <p>Profitez d’une variété de propositions pour répondre à tous les besoins et budgets.</p>
          </div>
          <div className="col-md-2 offset-md-1 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="87" viewBox="0 0 77 87" fill="none">
              <path d="M1.96114 40.8945H64.629V78.3775C64.629 82.0328 61.6617 85.0001 58.0064 85.0001H8.58377C4.92845 85.0001 1.96114 82.0328 1.96114 78.3775V40.8945Z" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M40.0705 40.8945H26.5218V85.0001H40.0705V40.8945Z" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M21.5535 10.1927L69.5599 21.6206C73.1351 22.4717 75.3476 26.0667 74.4965 29.6419L71.8166 40.8999L10.8522 26.3874L13.5322 15.1294C14.3833 11.5542 17.9783 9.34162 21.5535 10.1927Z" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M39.5449 14.5176L35.3292 32.2205L47.26 35.0603L51.4736 17.3574" stroke="#1F6F6A" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M42.0594 2.16969C38.6986 1.3696 35.2763 3.47751 34.4762 6.8361C33.6761 10.1969 35.7842 13.6192 39.1427 14.4193C41.1869 14.9007 43.2288 15.3842 45.2729 15.8656C45.7565 13.828 46.2424 11.7904 46.7259 9.75287C47.526 6.39209 45.418 2.96977 42.0594 2.16969ZM40.6021 11.0541C39.0547 11.0541 37.8019 9.80122 37.8019 8.25381C37.8019 6.7064 39.0547 5.45353 40.6021 5.45353C42.1496 5.45353 43.4025 6.7064 43.4025 8.25381C43.4025 9.80122 42.1496 11.0541 40.6021 11.0541Z" stroke="#FFD0B8" stroke-width="2.5" stroke-miterlimit="10"/>
              <path d="M54.2564 5.09937C50.8956 4.29929 47.4733 6.40719 46.6732 9.76578C46.1874 11.8033 45.7017 13.8409 45.2159 15.8785C47.2579 16.3686 49.2998 16.8588 51.3396 17.349C54.7004 18.149 58.1227 16.0411 58.9228 12.6826C59.7229 9.32178 57.615 5.89946 54.2564 5.09937ZM52.8848 13.8981C51.3374 13.8981 50.0845 12.6452 50.0845 11.0978C50.0845 9.55037 51.3374 8.2975 52.8848 8.2975C54.4322 8.2975 55.6851 9.55037 55.6851 11.0978C55.6851 12.6452 54.4322 13.8981 52.8848 13.8981Z" stroke="#FFD0B8" stroke-width="2.5" stroke-miterlimit="10"/>
            </svg>
            <p>Bénéficiez d’une personnalisation des idées de cadeaux en prenant en compte les préférences de chacun. </p>
          </div>
          <div className="col-md-2 offset-md-1 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="91" viewBox="0 0 98 91" fill="none">
              <path d="M5.92308 35.4609V82.2302" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M89.6154 35.4609V82.2302" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M82.2308 47.7695H65V82.2311H82.2308V47.7695Z" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M60.0769 47.7695H13.3077V72.3849H60.0769V47.7695Z" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M89.6154 1H5.92308V5.92308H89.6154V1Z" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M47.7692 60.0762L40.3846 64.9992" stroke="#A3E6DE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M42.8462 52.6914L30.5385 64.9991" stroke="#A3E6DE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M30.5385 55.1543L28.0769 60.0774" stroke="#A3E6DE" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
              <path d="M7.2708 5.92383C6.00007 12.59 4.72937 19.2593 3.46153 25.9255V31.2287C3.46153 33.5678 5.15965 35.4623 7.25634 35.4623H11.1812C13.2779 35.4623 14.976 33.5678 14.976 31.2287V25.9255C16.0619 19.2593 17.1449 12.59 18.2308 5.92383H7.27369H7.2708Z" fill="#235B55" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M29.8488 5.92383C29.2592 12.59 28.6696 19.2593 28.0769 25.9255V31.2287C28.0769 33.5678 29.892 35.4623 32.1332 35.4623H36.3284C38.5695 35.4623 40.3846 33.5678 40.3846 31.2287V25.9255V5.92383H29.8488Z" fill="#235B55" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M66.3842 5.92383H55.1538V25.9255V31.2287C55.1538 33.5678 56.9689 35.4623 59.2101 35.4623H63.4053C65.6464 35.4623 67.4615 33.5678 67.4615 31.2287V25.9255C67.1034 19.2593 66.7423 12.59 66.3842 5.92383Z" fill="#235B55" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M89.9473 5.92383H77.3077C78.4277 12.59 79.5476 19.2593 80.6711 25.9255V31.2287C80.6711 33.5678 82.7162 35.4623 85.2413 35.4623H89.9682C92.4933 35.4623 94.5385 33.5678 94.5385 31.2287V25.9255C93.0081 19.2593 91.4777 12.59 89.9508 5.92383H89.9473Z" fill="#235B55" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M97 82.2305H1V89.6151H97V82.2305Z" fill="white" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M19.4194 5.92383L15.7692 25.9255V29.041C15.7692 32.5883 18.6583 35.4623 22.2243 35.4623C25.7903 35.4623 28.6794 32.5883 28.6794 29.041V25.9255L30.5385 5.92383H19.4194Z" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M55.1538 25.9255V5.92383H40.3846V25.9255V29.041C40.3846 32.5883 43.6889 35.4623 47.7674 35.4623C51.8459 35.4623 55.1501 32.5883 55.1501 29.041V25.9255H55.1538Z" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
              <path d="M78.3912 5.92383H65L66.3872 25.9255V29.041C66.3872 32.5883 69.9328 35.4623 74.309 35.4623C78.6853 35.4623 82.2308 32.5883 82.2308 29.041V25.9255L78.3872 5.92383H78.3912Z" stroke="#235B55" stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
            <p>Explorez un large éventail de choix avec plus de 500 enseignes partenaires à votre disposition. </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 bg-lastsection text-center">
            <img src="../src/assets/finpage.png" width="425px"/>
          </div>
          <div className="col-md-4 offset-1 py-5">
            <h2 className='bs-green pt-5 mt-5'>Nos enseignes partenaires</h2>
            <p>Découvrez nos enseignes partenaires, un réseau sélectionné pour vous offrir le meilleur. De la qualité, de la diversité, et des services adaptés à vos besoins. Découvrez nos partenaires dès maintenant.</p>
            <div className='row align-items-center'>
              <div className="col-md-3">
                <img src="../src/assets/amazon.png" width="100px"/>
              </div>
              <div className="col-md-3">
                <img src="../src/assets/fnac.png" width="75px"/>
              </div>
              <div className="col-md-3">
                <img src="../src/assets/sacrefrançais.png" width="75px"/>
              </div>
              <div className="col-md-3">
                <img src="../src/assets/enaje.png" width="100px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Home
  