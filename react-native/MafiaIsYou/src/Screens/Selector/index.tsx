import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
`;

const TextContainer = Styled.View`
    flex: 1;
    font-weight: bold;
    align-items: center;
    justify-content: flex-end;
    background-color: yellow;
`;

const SelectContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: red;
`;

const SubmitContainer = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    background-color: green;
`;

const TextLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

interface Props {
    title?: string;
    count: number;
    submit: () => void;
    setPuzzle: (arg0: number) => void;
}

const Counter = ({ title, count, submit, setPuzzle }: Props) => {
    return (
        <Container>
            {title && (
                <TextContainer>
                    <TextLabel>{title}</TextLabel>
                </TextContainer>
            )}
            <SelectContainer>
                <Button iconName="minus" onPress={() => setPuzzle((count - 1 === 1? 2: count - 1))} />
                <TextLabel>{count}</TextLabel>
                <Button iconName="plus" onPress={() => setPuzzle((count + 1 === 11? 10: count + 1))} />
            </SelectContainer>
            <SubmitContainer>
                <Button iconName="done" onPress={() => submit()} />
            </SubmitContainer>
        </Container>
    );
};

export default Counter;