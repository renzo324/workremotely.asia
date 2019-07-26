import React, { useState, useEffect } from 'react';
import axios from 'axios';

const remoteOK = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    const fetchData = await () => {
      const response = await axios.get('https://remoteok.io/api');
      setFeed(response.data);
    };
    fetchData();
  }, []);
  
  return (
      <h1>Feed</h1>

      <ul>
        <li>
          <p class="legal">{feed.legal}</p>
          <a class="position" href="#">{feed.position }</a>
          
          <ul>
          <li class="company">{ feed.company }</li>
            <li class="tags">{feed.tags}</li>
            <li ><a href="{{ feed.url }}">{feed.url}</a></li>
          </ul>
        
        </li>
      </ul>
    )
}

export default remoteOK;
