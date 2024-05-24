import React from 'react';

const BudgetQuestion = ({ formData, handleChange, nextStep, prevStep }) => {
  const handleBudgetClick = (value) => {
    handleChange({ target: { name: 'budget', value } });
  };

  return (
    <div>
      <h5>Choisissez votre budget :</h5>
      <div className='row'>
        <div className="col-md-4 mb-4">
        <button
          className={`budget-btn ${formData.budget === 'moins de 20€' ? 'selected' : ''}`}
          onClick={() => handleBudgetClick('moins de 20€')}
        >
          Moins de 20€
        </button>
        </div>
        <div className="col-md-4 mb-4">
        <button
          className={`budget-btn ${formData.budget === '25€ à 35€' ? 'selected' : ''}`}
          onClick={() => handleBudgetClick('25€ à 35€')}
        >
          25€ à 35€
        </button>
        </div>
        <div className="col-md-4 mb-4">
        <button
          className={`budget-btn ${formData.budget === '35€ à 50€' ? 'selected' : ''}`}
          onClick={() => handleBudgetClick('35€ à 50€')}
        >
          35€ à 50€
        </button>
        </div>
        <div className="col-md-4">
        <button
          className={`budget-btn ${formData.budget === '50€ à 100€' ? 'selected' : ''}`}
          onClick={() => handleBudgetClick('50€ à 100€')}
        >
          50€ à 100€
        </button>
        </div>
        <div className="col-md-4">
        <button
          className={`budget-btn ${formData.budget === '100€ à 150€' ? 'selected' : ''}`}
          onClick={() => handleBudgetClick('100€ à 150€')}
        >
          100€ à 150€
        </button>
        </div>
        <div className="col-md-4">
        <button
          className={`budget-btn ${formData.budget === 'plus de 150€' ? 'selected' : ''}`}
          onClick={() => handleBudgetClick('plus de 150€')}
        >
          Plus de 150€
        </button>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={prevStep}>Précédent</button>
        <button onClick={nextStep}>Suivant</button>
      </div>
    </div>
  );
};

export default BudgetQuestion;
