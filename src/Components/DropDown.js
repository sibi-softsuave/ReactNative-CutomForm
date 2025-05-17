import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CustomDropdown = ({items = [], onSelect}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View
      style={{marginVertical: 5, paddingHorizontal: 20, position: 'relative'}}>
      <Text style={{marginBottom: 5}}>Select an option:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={val => {
          setValue(val);
          onSelect(val);
        }}
        placeholder="Select an option"
        containerStyle={{
          height: 40,
          width: '100%',
          position: 'relative',
          zIndex: 1, // Ensure the dropdown container stays below the dropdown
        }}
        style={{
          backgroundColor: '#fafafa',
          borderColor: '#ccc',
        }}
        dropDownStyle={{
          backgroundColor: '#fafafa',
          position: 'absolute',
          top: '100%', // This places the dropdown below the container
          left: 0,
          right: 0,
          zIndex: 999, // Ensure dropdown appears above other components
        }}
      />
    </View>
  );
};

export default CustomDropdown;
