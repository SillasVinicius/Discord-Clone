import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from './../ChannelButton';

function ChannelList() {

  // function adicionarClasse(id) {
  //   const activeDiv = document.querySelector('.active');

  //   if(activeDiv) {
  //     activeDiv.classList.remove('active');  
  //     activeDiv.removeAttribute('selected'); 
  //   }
    
  //   document.getElementById(id).classList.add('active');

  //   //teste com o atributo selected, não deu certo :(
  //   // const activeDiv = document.querySelector('.active');

  //   // if(activeDiv) {
  //   //   activeDiv.classList.remove('active');  
  //   //   activeDiv.removeAttribute('selected'); 
  //   // }

  //   // const atualDiv = document.querySelector(`#${id}`);
  //   // atualDiv.setAttribute('selected', true);
    
  // }
  return (
      <Container>
          <Category>
              <span>Canais de texto</span>
              <AddCategoryIcon />
          </Category>

          <ChannelButton channelName="chat-livre" selected/>
          <ChannelButton channelName="Trabalho" />
          <ChannelButton channelName="PES2020" />
          <ChannelButton channelName="SwordArtOnline" />
          <ChannelButton channelName="GamesGeral" />

          {/* <ChannelButton channelName="chat-livre" click={adicionarClasse}/>
          <ChannelButton channelName="Trabalho" click={adicionarClasse}/>
          <ChannelButton channelName="PES2020" click={adicionarClasse}/>
          <ChannelButton channelName="SwordArtOnline" click={adicionarClasse}/>
          <ChannelButton channelName="GamesGeral" click={adicionarClasse}/> */}
      </Container>
  );
}

export default ChannelList;