//import libraries
import React from 'react';
import { Text, View } from 'react-native';
//Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginBottom: 10,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    paddingTop: 10,
    fontSize: 40,
    fontWeight: '200',
    textAlignVertical: 'center'
  }
};
//Make the Component available to other parts of the app
export default Header;
