import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RemoteOK = () => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://cors-anywhere.herokuapp.com/remoteok.io/api');
      setFeed(response.data);
      console.log(feed);
    };
    fetchData();
    console.log(feed);
  }, [feed]);
  
  return (
    <React.Fragment>
      <h1>Feed</h1>
     
         {/* <ul> */}
          {/* <li> */}
            <p className="legal">{feed[0].legal}</p>
             {/* <a className="position" href="{ feed[0].url }">{feed[0].position }</a> */}
            {/*  <ul>
                <li className="company">{ feed[0].company }</li>
                <li className="tags">{feed[0].tags}</li>
                <li ><a href="{ feed[0].url }">{feed[0].url}</a></li>
              </ul> */}
          {/* </li> */}
        {/* </ul>  */}
      </React.Fragment>
    )
}

export default RemoteOK;
