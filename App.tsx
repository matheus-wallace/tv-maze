import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme';
import Text from './src/common/components/text';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={styles.container}>
        <Text size={50} color="brand">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
