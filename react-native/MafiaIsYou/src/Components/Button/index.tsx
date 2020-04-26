import React from 'react';
import Styled from 'styled-components/native';


const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
    iconName: 'plus' | 'minus' | 'done' | 'back' | 'replay';
    onPress?: () => void;
}

const Button = ({ iconName, onPress }: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'plus'
                    ? require('~/Assets/Images/add.png')
                    : (iconName === 'minus' ? 
                        require('~/Assets/Images/remove.png') 
                        : iconName === 'done' ? 
                            require('~/Assets/Images/done.png')
                            : iconName === 'back' ?
                                require('~/Assets/Images/back.png')
                                : require('~/Assets/Images/replay.png')
                    )
                }
            />
        </Container>
    );
};

export default Button;