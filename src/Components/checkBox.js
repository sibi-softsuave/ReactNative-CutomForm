import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Custom Checkbox Component
const CustomCheckbox = ({label, checked, onCheck}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, checked && styles.checked]}
        onPress={onCheck}>
        {checked && <View style={styles.innerCheckbox} />}
      </TouchableOpacity>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

// Main Component
const CheckboxList = ({items}) => {
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => ({...acc, [item]: false}), {}),
  );

  // Handle the check/uncheck functionality
  const handleCheck = item => {
    setCheckedItems(prevState => ({
      ...prevState,
      [item]: !prevState[item], // Toggle the checked state
    }));
  };

  return (
    <View style={{padding: 20}}>
      {items.map((item, index) => (
        <CustomCheckbox
          key={index}
          label={item}
          checked={checkedItems[item]}
          onCheck={() => handleCheck(item)} // Handle check/uncheck
        />
      ))}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  innerCheckbox: {
    width: 14,
    height: 14,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CheckboxList;
