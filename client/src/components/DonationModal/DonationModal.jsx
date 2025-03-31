import { useState } from 'react';
import './DonationModal.css';

export default function DonationModal() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleDonate = async () => {
        try {
            setIsLoading(true);
            setError(null);
            
            // Use the current origin for the API URL
            const apiUrl = `${window.location.origin}/api/create-checkout-session`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            // Redirect to Stripe Checkout
            window.location.href = data.url;
        } catch (err) {
            setError('Failed to start payment process. Please try again.');
            console.error('Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="donation-container">
            <button 
                className="donate-button"
                onClick={handleDonate}
                disabled={isLoading}
            >
                {isLoading ? 'Loading...' : 'Support the Artist'}
            </button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}