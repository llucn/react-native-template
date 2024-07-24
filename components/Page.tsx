import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Formio } from 'react-native-formio';

export default function Page(props: {
  name: string,
  components: any;
  changeView: (name: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Formio 
        src={props.components} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});