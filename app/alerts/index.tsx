import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemeView from '@/presentation/ThemeView';
import { Alert } from 'react-native';

const AlertsScreen = () => {
    const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
   <ThemeView className='mx-5'>
   
        <ThemeButton className='mt-5' onPress={createTwoButtonAlert}> 2 Button Alert</ThemeButton>
          <ThemeButton className='mt-5' onPress={createThreeButtonAlert}> 3 Button Alert</ThemeButton>
   </ThemeView>
  );
};
export default AlertsScreen;
