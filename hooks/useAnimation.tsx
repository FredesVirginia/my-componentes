import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;
    const fadeId = ( { duration = 300 , toValue = 1 , useNativeDriver = true , easing = Easing.linear ,  callback = ()=>{}} )=>{
    Animated.timing(animatedOpacity , {
         toValue : 0 , 
        duration : 700, 
        useNativeDriver: true,
        easing : Easing.linear,
        
    }).start(callback);

    Animated.timing(animatedTop , {
       
         toValue : toValue , 
      duration : duration , 
      useNativeDriver: useNativeDriver,
      easing: easing
    }).start(callback)
  }


    const fadeOut = ( { duration = 300 , toValue = 0 , useNativeDriver = true , easing = Easing.quad })=>{
    Animated.timing(animatedOpacity , {
      toValue : toValue , 
      duration : duration, 
      useNativeDriver: useNativeDriver,
        easing : easing
    }).start(()=>animatedTop.resetAnimation());
  }


  const startMovingTopPosition = ({ initialPosition = -100, duration = 300 , toValue = 0 , useNativeDriver = true , easing = Easing.ease})=>{
     animatedTop.setValue(initialPosition)
     Animated.timing(animatedOpacity , {
     toValue : toValue , 
      duration : duration, 
      useNativeDriver: useNativeDriver,
        easing : easing
    }).start();
  }


  return {
    animatedOpacity , 
    animatedTop , 
    fadeId, 
    fadeOut,
    startMovingTopPosition
  };
};
