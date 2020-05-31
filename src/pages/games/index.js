import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Games = () => {
  useEffect(() => {
    const socket = new SockJS('http://localhost:8082/mafia');
    const stompClient = Stomp.over(socket);
    stompClient.debug = null;
    stompClient.connect({}, (frame) => {
      stompClient.subscribe('/topic/registration', (registration) => {
        console.log('registration', registration);
      });
      stompClient.send('/game/registration', {}, JSON.stringify({name: 'name'}));
    });
    // const socket = new WebSocket('ws://localhost:8082/mafia/websocket');
    // socket.addEventListener('message', async (event) => {
    //   console.log(event.data);
    //   // const message = JSON.parse(event.data);
    //   // const request = await fetch(`http://localhost:8080/profiles/${message.id}`, headers); 
    //   // const profile = await request.json();
    //   // this.state.profiles.push(profile);
    //   // this.setState({profiles: this.state.profiles});
    // });
    // socket.onopen = () => socket.send("/game/registration", 'name');
  }, []);
  
  return (
    <div>Hi</div>
  );
};

export default Games;