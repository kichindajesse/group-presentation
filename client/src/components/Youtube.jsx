import React from 'react';

const Youtube = () => {
  const videoId = '8m7talgVVJM'; // Extract video ID from the YouTube link

  return (
    <div>
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?start=0`} // Add 'start' parameter to specify starting time
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?start=0`} // Add 'start' parameter to specify starting time
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?start=0`} // Add 'start' parameter to specify starting time
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?start=0`} // Add 'start' parameter to specify starting time
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default Youtube;
