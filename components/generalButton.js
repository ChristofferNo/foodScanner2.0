import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function GeneralButton(props) {
    const { onPress, title } = props;
    return (
        <View><Pressable style={styles.button} onPress={onPress}><Text>{title}</Text></Pressable></View>
    );}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        },
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 32,
          elevation: 3,
          backgroundColor: '#edeef0',
        },
      });