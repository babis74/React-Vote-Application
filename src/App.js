import React, { useState } from 'react';
import Navbar from './Navbar';
import ImageRow from './ImageRow';
import Footer from './Footer';

const App = () => {
  const [images, setImages] = useState([
    { id: 1, url: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/69/e6/91/sef.jpg', description: 'Πιτόγυρο', likes: 0, dislikes: 0 },
    { id: 2, url: 'https://cdn.onmmd.gr/img/1200/675/85/2019/04/30/burger.jpg?t=Ho1BwmVhh63BqzEH40hiDg', description: 'Χάμπουργκερ', likes: 0, dislikes: 0 },
    { id: 3, url: 'https://www.enikos.gr/wp-content/uploads/2018/05/574236_00133420a3-a96cf9ae555fcb22.jpg', description: 'Αυγά Μάτια', likes: 0, dislikes: 0 },
  ]);

  const [totalVotes, setTotalVotes] = useState(0);

  const handleVote = (imageId, voteType) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId
          ? {
              ...image,
              likes: voteType === 'like' ? image.likes + 1 : image.likes,
              dislikes: voteType === 'dislike' ? image.dislikes + 1 : image.dislikes,
            }
          : image
      )
    );

    setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
  };

  return (
    <div>
      <Navbar />
      <ImageRow images={images} onVote={handleVote} />
      <Footer totalVotes={totalVotes} />
    </div>
  );
};

export default App;
