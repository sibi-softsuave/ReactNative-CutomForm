import React from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import FormSheetStyle from './style';
import SwitchComponent from './SwitchComponent';
import QuestionData from './jsonData';

const FormComponent = ({
  Heading = 'Data Form',
  QuestionArray = QuestionData,
}) => {
  const styles = FormSheetStyle;
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={25} behavior="padding">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headingText}>{Heading}</Text>
        </View>
        <View style={{width: '100%'}}>
          {QuestionArray.map((item, index) => (
            <SwitchComponent
              index={index}
              key={index}
              Data={item}
              Type={item.QuestionType}
            />
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default FormComponent;
