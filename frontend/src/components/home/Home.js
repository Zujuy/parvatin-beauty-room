import React from 'react';
import portada from "../../images/portada.png";

function Home() {
  return (
    <div className="workingImage"
      style={{ backgroundImage: `url(${portada})` }}>
    </div>
  );
}

export default Home;
