import { useAnimation } from '@/hooks/useAnimation';
import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemeView from '@/presentation/ThemeView';
import { Animated } from 'react-native';

const Animation101Screen = () => {
  
  const {animatedOpacity , animatedTop , fadeId , fadeOut , startMovingTopPosition} = useAnimation();
  
  return (
    <ThemeView margin  className='justify-center items-center flex-1'>
       <Animated.View
       className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
       style={{
        width:150,
        height:150,
        opacity: animatedOpacity, 
        transform: [
          {
            translateY: animatedTop
          }
        ]
       
       }}
       />


       
        <ThemeButton className='my-5' onPress={()=>{
          fadeId();
          startMovingTopPosition()
        }}>FadeIn</ThemeButton>
         <ThemeButton className='my-5' onPress={fadeOut}>FadeOut</ThemeButton>
    </ThemeView>
  );
};
export default Animation101Screen;
