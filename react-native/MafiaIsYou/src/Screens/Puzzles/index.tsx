import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'
import { Alert } from 'react-native';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #EEE;
`;

const TextContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const PuzzleContainer = Styled.View`
  flex: 6;
  background-color: black;
`;

const Puzzle = Styled.TouchableOpacity`
  flex: 1;
  border-color: white;
  border-width: 2px;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
`;

const PuzzleText = Styled.Text`
  font-size: 24px;
  color: white;
`;

const Text = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

interface Props {
  count: number;
  submit: () => void;
}

const Puzzles = ({ count, submit }: Props) => {
  const puzzles = [];
  const [bomb, setBomb] = useState<number>(Math.floor(Math.random() * count));
  

  for (var i = 0; i < count; i++) {
    if(i === bomb) {
      puzzles.push(<Puzzle key={i} onPress={() => {Alert.alert("잘가요...");}}><PuzzleText>{i + 1}</PuzzleText></Puzzle>)
    } else {
      puzzles.push(<Puzzle key={i}><PuzzleText>{i + 1}</PuzzleText></Puzzle>)
    }
  }
  
  return (
    <Container>
      <TextContainer>
        <Text>1/{count} 확률, 죽음의 레이스!</Text>
      </TextContainer>
      <PuzzleContainer>
        {puzzles}
      </PuzzleContainer>
      <ButtonContainer>
          <Button iconName="back" onPress={() => submit()} />
          <Button iconName="replay" onPress={() => {setBomb(Math.floor(Math.random() * count)); Alert.alert("한 번 더~~~");}} />
      </ButtonContainer>
    </Container>
  );
};

export default Puzzles;