import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';

const customFonts = {
    'Manrope-Bold': require('../assets/fonts/Manrope-Bold.ttf'),
    'Manrope-ExtraBold': require('../assets/fonts/Manrope-ExtraBold.ttf'),
    'Manrope-ExtraLight': require('../assets/fonts/Manrope-ExtraLight.ttf'),
    'Manrope-Light': require('../assets/fonts/Manrope-Light.ttf'),
    'Manrope-Medium': require('../assets/fonts/Manrope-Medium.ttf'),
    'Manrope': require('../assets/fonts/Manrope-Regular.ttf'),
    'Manrope-SemiBold': require('../assets/fonts/Manrope-SemiBold.ttf'),
}

export default function Loading() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    async function _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        setFontsLoaded(true);
    }

    useEffect(() => {
        _loadFontsAsync();
    }, []);

    return (
        <>
            {fontsLoaded ? (
                <View style={styles.container}>
                    <Text style={styles.text}>Retrieving weather data...</Text>
                </View>
            ) : null}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
        fontFamily: "Manrope",
    }
});