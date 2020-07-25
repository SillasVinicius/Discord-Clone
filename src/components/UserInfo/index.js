import React from 'react';
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadPhoneIcon, SettingsIcon } from './styles';

function UserInfo() {
  return (
      <Container>
          <Profile>
            <Avatar/>
            <UserData>
              <strong>Sillas Vinícius</strong>
              <span>#1102</span>
            </UserData>
          </Profile>
          <Icons>
              <MicIcon />
              <HeadPhoneIcon />
              <SettingsIcon />
          </Icons>
      </Container>
  );
}

export default UserInfo;