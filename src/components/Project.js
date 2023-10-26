import React from 'react';
import '../components/Project.css'

import image from '../components/image.jpg'; // Import the image file

function Project() {
  return (
    <div>
      <img src={image} alt="Project Image" /> {/* Use the imported image variable */}
      <h2>COMPLETED PROJECT</h2>
      <h4>1.BOOKLY</h4>
      <p>Click Here<a href="https://shabna-pk.github.io/sellnow/" target="_blank"><span>Visit site</span> </a> </p>

    </div>
    
  );
}

export default Project;
