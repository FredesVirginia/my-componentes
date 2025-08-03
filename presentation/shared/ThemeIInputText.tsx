import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
interface Props extends TextInputProps{
    className? : string;
}

const ThemeIInputText = ({ className , ...rest} : Props) => {
  return (
    <TextInput className='py-4 px-2 text-black dark:text-white' 
    placeholderTextColor="gray"
    {...rest}
    />
  )
}

export default ThemeIInputText

const styles = StyleSheet.create({})