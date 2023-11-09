import React from 'react';
import './CircularGauge.scss';

const CircularGauge = ({ value }) => {

  return (
    <div className="semi-donut-model-2 margin" style={{ '--percentage': 50, '--fill': '#E1BA1B' }}>
    </div>
  );
};

export default CircularGauge;
