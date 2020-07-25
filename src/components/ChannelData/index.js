import React from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, {Mention} from './../ChannelMessage';

function ChannelData() {
  return (
      <Container>
          <Messages>
            {Array.from(Array(15).keys()).map((n) => (
              <ChannelMessage
                key={n}
                author="Sillas Vinícius"
                date="04/03/2020"
                content="Isso é uma mensagem!"
              />
            ))}
            <ChannelMessage
              author="Sillas Vinícius"
              date="04/03/2020"
              content="Hoje é o meu aniversário!"
            />
            <ChannelMessage
              author="Diego Fernandes"
              date="04/03/2020"
              content={
                <>
                  <Mention>@Sillas Vinícius</Mention>, Parabéns! mas responde aí, é biscoito ou bolacha ?
                </>
              }
              hasMention
              isBot
            />
          </Messages>
          <InputWrapper>
            <Input type="text" placeholder="Conversar no #chat selecionado!"/>
            <InputIcon />
          </InputWrapper>
      </Container>
  );
}

export default ChannelData;