import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import Container from './src/common/components/Container/';
import Content from './src/common/components/Content';
import Spacer from './src/common/components/Spacer/index';
import Text from './src/common/components/Text';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Text size={30} color="onSecondary">
          1 Meu componente de text
        </Text>
        <Spacer height={30} />
        <Text size={30} color="onSecondary">
          2 Meu componente de text
        </Text>
        <Content>
          <Spacer height={30} />
          <Text size={30} color="onSecondary">
            1 Meu componente de text
          </Text>
          <Spacer height={30} />
          <Text size={30} color="onSecondary">
            2 Meu componente de text
          </Text>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
