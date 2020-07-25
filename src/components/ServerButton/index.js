import React from 'react';
import { Button } from './styles';
import Logo from '../../assets/logo-rocketseat.svg';

function ServerButton({selected, isHome, hasNotification, mentions}) {
  return (
    <Button 
        isHome={isHome}
        selected={selected}
        hasNotification={hasNotification}
        mentions={mentions}
        className={selected ? 'active' : ''}
    >
        {isHome && <img src={Logo} alt="RocketSeat"/>}
    </Button>
  );
}

export default ServerButton;