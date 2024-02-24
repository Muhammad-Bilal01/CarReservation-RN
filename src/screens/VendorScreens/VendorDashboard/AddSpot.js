import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BLACK_COLOR,
  INPUTBOX_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../../utils/Colors';
import CustomHeader from './Drawer/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomSolidButton from '../../../components/CustomSolidButton';

function AddSpot() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        onMenu={() => {
          navigation.openDrawer();
        }}
      />
      <ScrollView style={styles.detailsForm}>
        <CustomTextInput placeholder={'Spot Name'} />
        <CustomTextInput placeholder={'Address'} />

        <View style={styles.bottomInput}>
          <View style={{width: '48%'}}>
            <CustomTextInput placeholder={'Latitude'} />
          </View>
          <View style={{width: '48%'}}>
            <CustomTextInput placeholder={'Longitude'} />
          </View>
        </View>

        <Text
          style={{
            color: PRIMARY_COLOR,
            marginTop: moderateScale(10),
            marginBottom: moderateScale(10),
          }}>
          Select Loaction
        </Text>

        <View style={styles.bottomInput}>
          <View style={{width: '48%'}}>
            <TouchableOpacity style={styles.date_box}>
              <Text
                style={{color: PRIMARY_COLOR, marginLeft: moderateScale(10)}}>
                From Date
              </Text>
              <Image
                source={require('../../../res/images/calendar.png')}
                style={{marginRight: moderateScale(10)}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '48%'}}>
            <TouchableOpacity style={styles.date_box}>
              <Text
                style={{color: PRIMARY_COLOR, marginLeft: moderateScale(10)}}>
                To Date
              </Text>
              <Image
                source={require('../../../res/images/calendar.png')}
                style={{marginRight: moderateScale(10)}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <CustomTextInput placeholder={'Per Hour Price'} />
        <View style={{marginVertical: moderateScale(10)}}>
          <View style={styles.weekSelection}>
            <View
              style={{
                marginTop: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: BLACK_COLOR}}>Monday</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                //   onValueChange={toggleSwitch}
                //   value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: moderateScale(10),
                }}>
                <TouchableOpacity
                  style={{
                    width: '42%',
                    height: moderateVerticalScale(40),
                    backgroundColor: INPUTBOX_COLOR,
                    borderRadius: moderateScale(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: PRIMARY_COLOR}}>1pm - 2pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '42%',
                    height: moderateVerticalScale(40),
                    backgroundColor: INPUTBOX_COLOR,
                    borderRadius: moderateScale(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: PRIMARY_COLOR}}>1pm - 2pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '42%',
                    height: moderateVerticalScale(40),
                    backgroundColor: INPUTBOX_COLOR,
                    borderRadius: moderateScale(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: PRIMARY_COLOR}}>1pm - 2pm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '42%',
                    height: moderateVerticalScale(40),
                    backgroundColor: INPUTBOX_COLOR,
                    borderRadius: moderateScale(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: PRIMARY_COLOR}}>1pm - 2pm</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../../res/images/ic_plus.png')}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    marginRight: moderateScale(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.weekSelection}>
            <View
              style={{
                marginTop: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: BLACK_COLOR}}>Tuesday</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                //   onValueChange={toggleSwitch}
                //   value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: moderateScale(10),
                }}></View>
              <TouchableOpacity>
                <Image
                  source={require('../../../res/images/ic_plus.png')}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    marginRight: moderateScale(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.weekSelection}>
            <View
              style={{
                marginTop: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: BLACK_COLOR}}>Wednesday</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                //   onValueChange={toggleSwitch}
                //   value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: moderateScale(10),
                }}></View>
              <TouchableOpacity>
                <Image
                  source={require('../../../res/images/ic_plus.png')}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    marginRight: moderateScale(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.weekSelection}>
            <View
              style={{
                marginTop: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: BLACK_COLOR}}>Thursday</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                //   onValueChange={toggleSwitch}
                //   value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: moderateScale(10),
                }}></View>
              <TouchableOpacity>
                <Image
                  source={require('../../../res/images/ic_plus.png')}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    marginRight: moderateScale(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.weekSelection}>
            <View
              style={{
                marginTop: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: BLACK_COLOR}}>Friday</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                //   onValueChange={toggleSwitch}
                //   value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: moderateScale(10),
                }}></View>
              <TouchableOpacity>
                <Image
                  source={require('../../../res/images/ic_plus.png')}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    marginRight: moderateScale(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.weekSelection}>
            <View
              style={{
                marginTop: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: BLACK_COLOR}}>Saturday</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                //   onValueChange={toggleSwitch}
                //   value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: moderateScale(10),
                }}></View>
              <TouchableOpacity>
                <Image
                  source={require('../../../res/images/ic_plus.png')}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    marginRight: moderateScale(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.weekSelection}>
            <View
              style={{
                marginTop: moderateScale(20),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: BLACK_COLOR}}>Sunday</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                //   thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                //   ios_backgroundColor="#3e3e3e"
                //   onValueChange={toggleSwitch}
                //   value={isEnabled}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  width: '80%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: moderateScale(10),
                }}></View>
              <TouchableOpacity>
                <Image
                  source={require('../../../res/images/ic_plus.png')}
                  style={{
                    width: scale(20),
                    height: scale(20),
                    marginRight: moderateScale(10),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: moderateScale(80)}}></View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '90%',
          bottom: moderateScale(20),
          alignSelf: 'center',
        }}>
        <CustomSolidButton
          title={'Next'}
          onPress={() => {
            navigation.navigate('AddSpotImages');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  detailsForm: {
    marginTop: moderateScale(10),
    width: '90%',
    alignSelf: 'center',
  },
  bottomInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date_box: {
    marginTop: moderateVerticalScale(10),
    width: '100%',
    height: moderateVerticalScale(40),
    backgroundColor: INPUTBOX_COLOR,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weekSelection: {},
});

export default AddSpot;
