import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageRow = ({ images, onVote }) => {
  const [votedImages, setVotedImages] = useState([]);

  const handleVote = (imageId, voteType) => {
    if (!votedImages.includes(imageId)) {
      onVote(imageId, voteType);
      setVotedImages([...votedImages, imageId]);
    } else {
      alert('You can only vote once per image!');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {images.map((image) => (
          <div className="col-md-4 mb-4" key={image.id}>
            <div className="card">
              <img src={image.url} className="card-img-top" alt={image.description} />
              <div className="card-body">
                <h5 className="card-title">{image.description}</h5>
                <div className="btn-group">
                  <button
                    className="btn btn-success"
                    onClick={() => handleVote(image.id, 'like')}
                  >
                    Like
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleVote(image.id, 'dislike')}
                  >
                    Dislike
                  </button>
                </div>
                <p className="mt-2">Likes: {image.likes}</p>
                <p>Dislikes: {image.dislikes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRow;
