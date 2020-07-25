import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

function ChannelButton({channelName, selected}) {
  return (
    // <Container className={selected ? 'active' : ''} onClick={e => click(channelName)} id={channelName}>
      <Container className={selected ? 'active' : ''}>
          <div>
              <HashtagIcon/>
              <span>{channelName}</span>
          </div>
          <div className={selected ? 'visibleIcons' : 'hiddenIcons'} >
              <InviteIcon />
              <SettingsIcon />
          </div>
      </Container>
  );
}

export default ChannelButton;