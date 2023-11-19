import React from 'react';
import './CircularGauge.css';
import './GaugeMeter.js';

const CircularGauge = ({ value }) => {
  $(document).ready(function(){
    $(".GaugeMeter").gaugeMeter();
  });

  return (
   <div class="GaugeMeter" id="GaugeMeter_1" data-percent="0"></div>

  );
};

export default CircularGauge;
