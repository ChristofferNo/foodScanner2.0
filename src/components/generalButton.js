import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function GeneralButton(props) {
  const { onPress, title } = props;
  return (
    <View>
     <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "dashed",
    borderRadius: 8,

    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 32,
  },
  btnText: {
    fontSize: 16,
  },
});