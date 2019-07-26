import React from 'react';
import axios from 'axios';

export default class remoteOK extends React.Component{
  componentDidMount(){
    axios.get('https://remoteok.io/api')
    .then(resp=> {
      const feed= resp.data;
      this.setState({feed});
    })
  }
  render(){
    return (
      <h1>Feed</h1>

      <ul>
        <li>
          <p class="legal">{feed.legal}</p>
          <a class="position" routerLink="/details/{{feed.id}}">{feed.position }</a>
          
          <ul>
          <li class="company">{ feed.company }</li>
            <li class="tags">{feed.tags}</li>
            <li ><a href="{{ feed.url }}">{feed.url}</a></li>
          </ul>
        
        </li>
      </ul>
    )
  }
}
export default remoteOK ;
