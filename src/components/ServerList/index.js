import React from 'react';
import { Container, Separator } from './styles';
import ServerButton from './../ServerButton/index';

function ServerList() {
  return (
    <Container>
        <ServerButton isHome />

        <Separator />

        <ServerButton />
        <ServerButton hasNotification />
        <ServerButton mentions={3}/>
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotification />
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={72}/>
        <ServerButton />
        <ServerButton />
    </Container>  
  );
}

export default ServerList;