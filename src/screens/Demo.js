import React from 'react';
import { Button, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/Counter';

const Demo = () => {
const count = useSelector((state) => state.user.value)
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}

export default Demo;