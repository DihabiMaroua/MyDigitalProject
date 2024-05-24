import React, { useState } from 'react';
import Slider from 'react-slick';

// Styles importés dans votre fichier CSS global ou index.js
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importez vos fichiers SVG
import AnniversaireSvg from '../../assets/Anniversaire.svg';
import NoelSvg from '../../assets/Noel.svg';
import MariageSvg from '../../assets/Mariage.svg';
import FetePereSvg from '../../assets/fete_pere.svg';
import FeteMereSvg from '../../assets/fete_mere.svg';
import PlaisirOffrirSvg from '../../assets/Plaisir_offrir.svg';

const OccasionQuestion = ({ formData, handleChange, prevStep, handleSubmit }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const occasions = [
    { name: 'Anniversaire', svg: AnniversaireSvg },
    { name: 'Noël', svg: NoelSvg },
    { name: 'Mariage', svg: MariageSvg },
    { name: 'Fête des mères', svg: FeteMereSvg },
    { name: 'Fête des pères', svg: FetePereSvg },
    { name: 'Plaisir d\'offrir ', svg: PlaisirOffrirSvg }
  ];

  const handleOccasionClick = (index) => {
    setActiveIndex(index);
    handleChange({ target: { name: 'occasion', value: occasions[index].name } });
  };

  const settings = {
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <h5>Choisissez l'occasion :</h5>
      <Slider {...settings}>
        {occasions.map((occasion, index) => (
          <div key={occasion.name} className='col-md-6'>
            <button
              className={`occasion-btn ${activeIndex === index ? 'selected' : ''}`}
              onClick={() => handleOccasionClick(index)}
            >
              {occasion.svg && <img src={occasion.svg} alt={occasion.name} />}
              {occasion.svg && <span>{occasion.name}</span>}
            </button>
          </div>
        ))}
      </Slider>

      <div className="buttons-container">
        <button onClick={prevStep}>Précédent</button>
        <button onClick={handleSubmit}>Rechercher</button>
      </div>
    </div>
  );
};

export default OccasionQuestion;
