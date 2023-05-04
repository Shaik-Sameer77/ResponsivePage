import React, { useState } from 'react';
import axios from 'axios';
import './DogImage.css';

function DogImage() {
  const [image, setImage] = useState(
    'https://images.pexels.com/photos/3177388/pexels-photo-3177388.jpeg?auto=compress&cs=tinysrgb&w=800'
  );

  const getDog = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImage(response.data.message);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="dog-image-container">
      <img
        src={image}
        height={'200px'}
        width={'200px'}
        alt="dog"
      />
      <button onClick={getDog}>Get Dog</button>
    </div>
  );
}

export default DogImage;
