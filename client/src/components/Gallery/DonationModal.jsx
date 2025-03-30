import { useState } from 'react';
import PropTypes from 'prop-types';
import './DonationModal.css';

const DonationModal = ({ isOpen, onClose, onDonate, onSkip }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = async () => {
    setIsLoading(true);
    try {
      await onDonate();
    } catch (error) {
      console.error('Donation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="donation-modal-overlay">
      <div className="donation-modal">
        <h2>Support the Artist</h2>
        <p>Would you like to make a small donation to support the artist?</p>
        <div className="donation-buttons">
          <button 
            className="donate-button"
            onClick={handleDonate}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Ok Fine ($2)'}
          </button>
          <button 
            className="skip-button"
            onClick={onSkip}
          >
            Hell No
          </button>
        </div>
      </div>
    </div>
  );
};

DonationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDonate: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
};

export default DonationModal; 