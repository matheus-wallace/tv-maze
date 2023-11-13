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
import ShowCover from './src/common/components/ShowCover';
import { View } from 'react-native';

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
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <ShowCover
              onPress={() => {}}
              title="The flash"
              url="https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg"
            />
            <ShowCover
              onPress={() => {}}
              title="The flash"
              url="https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg"
            />
          </View>
          <Spacer height={30} />
          <Icon icon="home" />
          <Avatar size="small" />
          <Notfound />
        </Content>
      </Container>
    </ThemeProvider>
  );
}
