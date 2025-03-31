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
            
            console.log('Making request to:', apiUrl); // Debug log
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create checkout session');
            }

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            // Redirect to Stripe Checkout
            window.location.href = data.url;
        } catch (err) {
            console.error('Error details:', err); // Debug log
            setError('Failed to start payment process. Please try again.');
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