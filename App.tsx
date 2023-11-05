import { ThemeProvider } from 'styled-components/native';
import Container from './src/common/components/Container/';
import Content from './src/common/components/Content';
import Spacer from './src/common/components/Spacer/index';
import Text from './src/common/components/Text';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import Icon from './src/common/components/icon';
import Avatar from './src/common/components/Avatar';
import BackButton from './src/common/components/BackButton';
import Notfound from './src/common/components/NotFound';
import Input from './src/common/components/Input';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <BackButton
            onPress={() => {
              console.log('clicou');
            }}
          />
          <Spacer height={15} />
          <Input loading />

          <Text size={30} color="onSecondary">
            1 Meu componente de text
          </Text>
          <Spacer height={30} />
          <Icon icon="home" />
          <Avatar size="small" />
          <Notfound />
        </Content>
      </Container>
    </ThemeProvider>
  );
}
