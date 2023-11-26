import React from 'react';
import '../style/style.css';

// Sample news data
const newsData = [
  {
    id: 1,
    title: 'One experts journey',
    topic: 'Forest',
    image: 'https://ciorg.imgix.net/images/default-source/default-album/ci_43099308?&auto=compress&auto=format&fit=crop&w=560&h=400', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'One experts journey',
    topic: 'Technology',
    image: 'https://ciorg.imgix.net/images/default-source/default-album/ci_63609300?&auto=compress&auto=format&fit=crop&w=560&h=400', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'One experts journey',
    topic: 'Technology',
    image: 'https://ciorg.imgix.net/images/default-source/temp/hamilton-redsea?&auto=compress&auto=format&fit=crop&w=560&h=400', // Replace with actual image URL
  },
  {
    id: 4,
    title: 'One experts journey',
    topic: 'Technology',
    image: 'https://ciorg.imgix.net/images/default-source/default-album/ci_99973015?&auto=compress&auto=format&fit=crop&w=560&h=400', // Replace with actual image URL
  },
  {
    id: 5,
    title: 'One experts journey',
    topic: 'Technology',
    image: 'https://ciorg.imgix.net/images/default-source/default-album/ci_15002313?&auto=compress&auto=format&fit=crop&w=560&h=400', // Replace with actual image URL
  },
  // Add more news items as needed
];

const NewsScroll = () => {
  return (
    <div className="news-scroll">
      <div className="news-container">
        {newsData.map((newsItem) => (
          <div key={newsItem.id} className="news-item">
            <img src={newsItem.image} alt={newsItem.title}/>
            <div className="news-details">
              <h3>{newsItem.title}</h3>
              <p>{newsItem.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsScroll;
