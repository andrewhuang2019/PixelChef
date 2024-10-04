import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/(tabs)/about.tsx">
        <Text>About Page</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default Index;