import {placeholder, whileStatement} from '@babel/types';
import React, {useState} from 'react';
import {
  Button,
  Pressable,
  Text,
  View,
  Separator,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  Keyboard,
  Alert,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const showAlert = () => {
    Alert.alert('This functionality is not available, Yet.');
  };

  const [displayString, setdisplayString] = useState('');
  const [operator, setOperator] = useState('');
  

  return (
    <View style={styles.mainView}>
      <View style={styles.firstView}>
        <View style={{flex: 1}}>
          <TextInput
            value={displayString}
            selectTextOnFocus={false}
            showSoftInputOnFocus={false}
            autoFocus
            style={{
              height: windowHeight / 5,
              fontSize: 50,
              textAlign: 'right',
              paddingRight: 20,
              color: '#FFFFFF',
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            paddingRight: 20,
          }}>
          <Text style={{fontSize: 40, color: '#ffffff70'}}>0</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            paddingBottom: 30,
            paddingLeft: 30,
            paddingRight: 30,
          }}>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity style={{}}>
              <Image
                style={{height: 12.2, width: 20.0}}
                source={require('./resources/backSpace.png')}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={showAlert}>
              <Image
                style={{height: 18, width: 18}}
                source={require('./resources/scientificCalculator.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showAlert}>
              <Image
                style={{height: 6.4, width: 25.6, marginTop: 8}}
                source={require('./resources/ruler.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={showAlert}>
              <Image
                style={{height: 20, width: 20}}
                source={require('./resources/history.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.fourRow}>
          <TouchableOpacity
            onPress={() => setdisplayString('')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={[styles.textStyles, {color: '#f76f68'}]}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={showAlert}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={{color: '#9bd260', fontSize: 30}}>( )</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={showAlert}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={[styles.textStyles, {color: '#9bd260'}]}>%</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setdisplayString(displayString + ' ÷ ')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={[styles.textStyles, {color: '#9bd260'}]}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thirdRow}>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '7')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '8')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '9')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + ' x ')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={[styles.textStyles, {color: '#9bd260'}]}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondRow}>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '4')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '5')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '6')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + ' - ')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={[styles.textStyles, {color: '#9bd260'}]}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.firstRow}>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '3')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchAblbeButtonStyle]}>
            <Text
              onPress={() => setdisplayString(displayString + '2')}
              style={styles.textStyles}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '1')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + ' + ')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={[styles.textStyles, {color: '#9bd260'}]}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastRow}>
          <TouchableOpacity
            onPress={showAlert}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '0')}
            style={[styles.touchAblbeButtonStyle]}>
            <Text style={styles.textStyles}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setdisplayString(displayString + '.')}
            style={[styles.touchAblbeButtonStyle, {}]}>
            <Text style={[styles.textStyles, {}]}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.touchAblbeButtonStyle,
              {backgroundColor: '#427e04'},
            ]}>
            <Text style={[styles.textStyles, {color: '#FFFFFF'}]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'black',
    flex: 1,
  },
  firstView: {
    flex: 0.7,
    borderBottomWidth: 0.3,
    borderColor: '#FFFFFF90',
    marginHorizontal: 20,
  },
  secondView: {
    flex: 1,
    justifyContent: 'center',
  },
  firstRow: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  secondRow: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  thirdRow: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  fourRow: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  lastRow: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 35,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  touchAblbeButtonStyle: {
    borderColor: '#FFFFFF60',
    borderRadius: windowHeight / 5,
    backgroundColor: '#FFFFFF30',
    borderWidth: 1.5,
    height: windowHeight / 10.5,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  erasorViewStyling: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 40,
  },
  erasorButtonStyle: {
    borderColor: '#FFFFFF99',
    borderRadius: windowHeight / 5,
    backgroundColor: '#FFFFFF40',
    borderWidth: 1.5,
    height: windowHeight / 12.5,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zeroButtonStyle: {
    borderColor: '#FFFFFF99',
    borderRadius: 100,
    backgroundColor: '#FFFFFF40',
    borderWidth: 1.5,
    height: windowHeight / 10.5,
    width: '44.5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  allClearButtonStyle: {
    borderColor: '#FFFFFF99',
    borderRadius: 100,
    backgroundColor: '#FFFFFF40',
    borderWidth: 1.5,
    height: windowHeight / 10.5,
    width: '68%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
