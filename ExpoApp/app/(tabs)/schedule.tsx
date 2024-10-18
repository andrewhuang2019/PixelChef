import { Text, View, StyleSheet } from 'react-native';
import Button from '@/components/Button';

export default function Recipes() {
    return (
        <View style={styles.container}>
            <View>
                <Button label="Schedule" theme='schedule' />
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
    placeholderText: {
        color: ''
    }
});