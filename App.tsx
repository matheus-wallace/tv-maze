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

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <Spacer height={20} />
          <BackButton
            onPress={() => {
              console.log('clicou no botão in');
            }}
          />
          <Spacer height={20} />
          <Input loading />
          <Spacer height={20} />
          <Text numberOfLines={1} size={30} color="onSecondary">
            2 Meu componente de text 2 Meu componente de text2 Meu componente de
            text2 Meu componente de text
          </Text>

          <EpisodeCard episode={episodeMocked}></EpisodeCard>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
