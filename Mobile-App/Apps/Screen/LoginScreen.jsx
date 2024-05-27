import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

export default function LoginScreen() {
    const screenWidth = Dimensions.get('window').width;
    const imageWidth = screenWidth * 0.8;
    const imageHeight = imageWidth * (526 / 1727);

    return (
        <View style={styles.container}>
            <Image
                source={require('./../../assets/images/Dikshant.png')}
                style={{ width: imageWidth, height: imageHeight }}
                resizeMode="cover"
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Your IAS learning journey
                    <Text style={{ color: Colors.PRIMARY }}> Starts here. </Text>
                </Text>

                {/* Log In Button */}
                <TouchableOpacity style={styles.button}>
                    <Text style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 18 }}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ marginTop: 10, color: Colors.PRIMARY, textAlign: 'center' }}> Create Your Account</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 16,
        backgroundColor: Colors.BUTTON,
        borderRadius: 10, marginTop: 60
    }
});
