
import { useState } from "react";
import PropTypes from 'prop-types';

const PerformanceMetrics = ({ loadingTime, dataSize }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#c46b6b',
          color: 'white',
          border: 'none',
          borderRadius: '5%',
          width: '150px',
          height: '40px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          zIndex: 1000,
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isVisible ? '×' : 'performance'}
      </button>
      
      {isVisible && (
        <div className="performance-metrics" style={{ 
          position: 'fixed', 
          bottom: '70px', 
          right: '20px', 
          background: 'rgba(0, 0, 0, 0.8)', 
          color: 'white', 
          padding: '10px', 
          borderRadius: '5px',
          fontSize: '14px',
          zIndex: 1000,
          fontFamily: 'Courier, monospace',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'opacity 0.2s',
          opacity: 1
        }}>
          <div>Loading Time: {loadingTime?.toFixed(2)}ms</div>
          <div>Data Size: {(dataSize / 1024).toFixed(2)} KB</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMetrics

PerformanceMetrics.propTypes = {
  loadingTime: PropTypes.number,
  dataSize: PropTypes.number
};

PerformanceMetrics.defaultProps = {
  loadingTime: null,
  dataSize: 0
};