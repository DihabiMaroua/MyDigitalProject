import React, { useState } from 'react';
import GenderQuestion from './GenderQuestion';
import AgeGroupQuestion from './AgeGroupQuestion';
import BudgetQuestion from './BudgetQuestion';
import OccasionQuestion from './OccasionQuestion';

const GiftFilter = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: '',
    ageGroup: '',
    budget: '',
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Envoyer les données à une API ou effectuer une recherche ici
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <GenderQuestion formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <AgeGroupQuestion formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <BudgetQuestion formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <OccasionQuestion formData={formData} handleChange={handleChange} prevStep={prevStep} handleSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            {renderStep()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default GiftFilter;
