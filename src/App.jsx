import React, { useState, useEffect } from 'react';
import './App.css';

function Remote() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    // Update background color based on temperature
    const body = document.querySelector('body');
    var weather = ''
    if (temperature > 30) {
      body.classList.add('high-temperature');
      body.classList.remove('medium-temperature', 'low-temperature');
      var weather = 'Hot'
    } else if (temperature <= 30 && temperature > 10) {
      body.classList.add('medium-temperature');
      body.classList.remove('high-temperature', 'low-temperature');
      var weather = 'Good Weather'

    } else {
      body.classList.add('low-temperature');
      body.classList.remove('high-temperature', 'medium-temperature');
      var weather = 'Hot'

    }
  }, [temperature]);
  // console.log(weather)

  function increase() {
    setTemperature(temperature + 1);
  };

  function decrease() {
    setTemperature(temperature - 1);
  };

  return (
    <div>
      <div className=''>
        <h1>Temperature Control Remote</h1>

        <div className='circle-div'>
          <center className="circle">
            <span className="text">Current temperature: {temperature} °C</span>
          </center>
        </div>

        <div>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Remote;
