import React from 'react';
import {View, TextInput, Text} from 'react-native';

const CustomInput = ({label, value, onChangeText, placeholder}) => {
  return (
    <View style={{marginVertical: 8, paddingHorizontal: 20}}>
      {label && (
        <Text style={{marginBottom: 5, fontSize: 16, fontWeight: '600'}}>
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          fontSize: 16,
          backgroundColor: '#fafafa',
        }}
      />
    </View>
  );
};

export default CustomInput;
