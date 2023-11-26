import React from 'react';
import '../style/style.css';

// Sample news data
const newsData = [
  {
    id: 1,
    title: 'Leavey Library',
    filllevel: '8',
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhc2glMjBjYW58ZW58MHx8MHx8fDA%3D', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Near My Home',
    filllevel: '20',
    image: 'https://c8.alamy.com/comp/C8E3XB/overflowing-garbage-can-washington-dc-C8E3XB.jpg', // Replace with actual image URL
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
              <p className='topic'>Current Fill Level<h6>{newsItem.filllevel}</h6></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsScroll;
