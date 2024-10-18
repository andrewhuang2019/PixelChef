import { Text, View, StyleSheet } from 'react-native';
import Button from '@/components/Button';

export default function Recipes() {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Button label="Recipes" theme='recipe' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignContent: 'center'
    },
    placeholderText: {
        color: ''
    }
});