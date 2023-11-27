import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import BackButton from './src/common/components/BackButton';
import Container from './src/common/components/Container';
import Content from './src/common/components/Content';
import EpisodeCard from './src/common/components/EpisodeCard';
import Input from './src/common/components/Input';
import Spacer from './src/common/components/Spacer';
import Text from './src/common/components/Text';
import { episodeMocked } from './src/common/constants/mocks/episode.mock';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
