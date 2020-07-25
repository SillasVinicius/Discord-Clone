import React from 'react';

import { Container, Role, User, Avatar } from './styles';

function UserRow({nickname, isBot}) {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
}

function UserList() {
  return (
      <Container>
          <Role>Disponível - 1</Role>
          <UserRow nickname="Sillas Vinícius"/>

          <Role>Offline - 1</Role>
          <UserRow nickname="Diego Fernandes" isBot />

          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />
          <UserRow nickname="Teste" />

      </Container>
  );
}

export default UserList;