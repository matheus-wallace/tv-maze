import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import Text from './src/common/components/Text';
import Spacer from './src/common/components/Spacer/index';
import Container from './src/common/components/Container/';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text size={30} color="onSecondary">
          Meu componente 1
        </Text>
        <Spacer height={20} />
        <Text size={30} color="onSecondary">
          Meu componente 2
        </Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
