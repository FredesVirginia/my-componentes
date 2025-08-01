import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-reanimated';
import "../global.css";

export default function RootLayout() {
  const backgroundColor = useThemeColor(
    {
      light : "red" , dark : "indigo"
    }, "background"
  )
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
   <GestureHandlerRootView>
     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Text className='text-3xl mt-20 text-center mr-5'>Inicio de la Vida</Text>
    </ThemeProvider>
   </GestureHandlerRootView>
  );
}
