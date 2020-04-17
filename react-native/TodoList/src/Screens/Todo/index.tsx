import React from 'react';
import Styled from 'styled-components/native';

import TodoListView from './TodoListView';
import AddTodo from './AddTodo';
import RemoveAllTodo from './RemoveAllTodo';

const Container = Styled.View`
  flex: 1;
`;

interface Props {}

const Todo = ({ }: Props) => {
  return (
    <Container>
      <TodoListView />
      <AddTodo />
      <RemoveAllTodo />
    </Container>
  );
};

export default Todo;