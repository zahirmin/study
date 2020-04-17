import React from 'react';
import Dialog from 'react-native-dialog';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';
import { useCallback, useContext, useState } from 'react';

const Container = Styled.SafeAreaView`
    position: absolute;
    bottom: 50px;
    right: 100px;
    align-self: center;
    justify-content; flex-end;
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
`;

const Icon = Styled.Image`
    width: 24px;
    height: 24px;
`;

const RemoveAllTodo = () => {
    const { removeAllTodoList } = useContext<ITodoListContext>(TodoListContext);
    const [ dialogVisible, setDialogVisible ] = useState<boolean>(false);
  
    return (
      <Container>
        <ButtonContainer onPress={() => {setDialogVisible(true)}}>
            <Icon source={require('~/Assets/Images/removeAll.png')} />
            <Dialog.Container visible={dialogVisible}>
                <Dialog.Title>모든 Todo를 삭제합니다.</Dialog.Title>
                <Dialog.Description>진짜 삭제할거예요?</Dialog.Description>
                <Dialog.Button label="취소" onPress={() => {setDialogVisible(false)}} />
                <Dialog.Button label="삭제" onPress={() => {setDialogVisible(false); removeAllTodoList();}} />
            </Dialog.Container>
        </ButtonContainer>
      </Container>
    );
  };

export default RemoveAllTodo;