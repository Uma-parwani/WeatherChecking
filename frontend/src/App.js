import React from 'react';
import WeatherComponent from './WeatherComponent';

function App() {
  return (
    <div className="App">
      <WeatherComponent latitude={52.528} longitude={13.41} />
      {/* Add more instances with different coordinates */}
    </div>
  );
}

export default App;
