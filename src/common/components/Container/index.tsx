import React from 'react';
import { StatusBar } from 'react-native';
import { Content } from './styles';
import { ContainerProps } from './types';
import { useTheme } from 'styled-components';

const Container = ({ children }: ContainerProps) => {
  const { colors } = useTheme();
  return (
    <Content>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      {children}
    </Content>
  );
};

export default Container;
