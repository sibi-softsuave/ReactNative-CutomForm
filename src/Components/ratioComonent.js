import React, {useState} from 'react';
import {View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const RatioQuestion = ({onSelect}) => {
  const [select, setSelected] = useState(0);
  const [radioButtons, setRadioButtons] = useState([
    {id: '1', label: 'Yes', value: 'Yes'},
    {id: '2', label: 'No', value: 'No'},
  ]);

  const handlePress = updatedButtons => {
    console.log(updatedButtons);
    setSelected(updatedButtons);
  };

  return (
    <View style={{marginVertical: 5}}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={handlePress}
        selectedId={select}
        containerStyle={{flexDirection: 'row', alignSelf: 'center'}}
      />
    </View>
  );
};

export default RatioQuestion;
