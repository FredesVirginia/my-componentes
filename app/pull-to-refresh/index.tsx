import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/ThemeText';
import ThemeView from '@/presentation/ThemeView';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {
  const [isRefreshing , setIsRefresing] = useState(false)
  const primaryColor = useThemeColor({} , "primary");
  const backgroundColor = useThemeColor({
    dark:"black" , light : "white"
  } , "background")
   const onRefresh = async () =>{
      setIsRefresing(true);
      setTimeout(()=>{
        setIsRefresing(false)
      },3000)
    }
  return (
    
   
    <ScrollView 
    refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} 
      colors={[primaryColor , "red" , "orange"]}
      progressBackgroundColor={backgroundColor}
      />
    }
    >
        <ThemeView margin>
        </ThemeView>
          <ThemedText> Pull To Ref Fress Screem</ThemedText>
  </ScrollView>
    
  );
  
};
export default PullToRefreshScreen;
