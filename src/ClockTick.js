import React from 'react'

function tick() {
    RecatDOM.render(
        <Clock 
        date={new DataCue()}
      />
      document.getElementById('root')
    );
}

setInterval(tick, 1000);