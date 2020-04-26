import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Selector from './Screens/Selector';
import Puzzles from './Screens/Puzzles';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #EEE;
`;
 
const App = () => {
  const [mode, setMode] = useState<string>('selector');
  const [count, setCount] = useState<number>(6);

  return (
    <Container>
      {mode === "selector" && 
        <Selector title="몇 분이 게임을 하시나요?" count={count} setPuzzle={setCount} submit={() => setMode('puzzle')} />}
      {mode === "puzzle" && 
        <Puzzles count={count} submit={() => setMode('selector')}></Puzzles>}
    </Container>
  );
};

export default App;