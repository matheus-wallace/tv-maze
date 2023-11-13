import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import Icon from '../icon';
import { Container, AbsoluteIconEpisodeCover } from './styles';
import { EpisodeCoverProps } from './types';

const EpisodeCover = ({ name, size = 'small', url }: EpisodeCoverProps) => {
  const { colors } = useTheme();
  const aspectRatio = 16 / 9;
  return (
    <View>
      <Container
        size={size}
        accessibilityLabel={name}
        accessibilityRole="image"
        source={{ uri: url }}
        resizeMode="contain"
        style={{ aspectRatio }}
      />
      {!url && (
        <AbsoluteIconEpisodeCover>
          <Icon icon="picture" color={colors.caption}></Icon>
        </AbsoluteIconEpisodeCover>
      )}
    </View>
  );
};

export default EpisodeCover;
