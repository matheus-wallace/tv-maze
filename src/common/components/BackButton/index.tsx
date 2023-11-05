import React from 'react';
import { Container } from './styles';
import { BackButtonProps } from './types';
import Icon from '../icon';
import { useTheme } from 'styled-components/native';

const BackButton = ({ onPress }: BackButtonProps) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress} hitSlop={40}>
      <Icon icon="arrowLeft" color={colors.onSecondary} />
    </Container>
  );
};

export default BackButton;
