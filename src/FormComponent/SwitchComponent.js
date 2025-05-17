import React from 'react';
import {Text, View} from 'react-native';
import FormSheetStyle from './style';
import RatioQuestion from '../Components/ratioComonent';

import CustomDropdown from '../Components/DropDown';
import CustomInput from '../Components/input';
import CheckboxList from '../Components/checkBox';

const SwitchComponent = ({Data, Type = 'ratio', index}) => {
  const styles = FormSheetStyle;
  console.log(Data, '-----');
  return (
    <View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{`${index}) `}</Text>
        <Text style={styles.question}>{Data?.Question}</Text>
      </View>
      <View style={styles.optionContainer}>
        {(() => {
          switch (Type) {
            case 'dropdown': {
              return (
                <CustomDropdown
                  items={Data?.option.map((item, index) => {
                    return {key: index, label: item, value: item};
                  })}
                  onSelect={val => console.log('Selected:', val)}
                />
              );
            }
            case 'input': {
              return <CustomInput />;
            }
            case 'ratio': {
              return <RatioQuestion />;
            }
            case 'checkbox': {
              return <CheckboxList items={Data?.option} />;
            }
            default:
              return null;
          }
        })()}
      </View>
    </View>
  );
};
export default SwitchComponent;
