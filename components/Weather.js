import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-remix-icon";

const weatherOptions = {
    Thunderstorm: {
        iconName: "lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "rain",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but ???"
    },
    Rain: {
        iconName: "rains",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Looks like it is raining",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "snows",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold outside",
        subtitle: "Do you want to build a snowman ?"
    },
    Atmosphere: {
        iconName: "fog",
        gradient: ["#D7D2CC", "#304352"],
        title: "Atmosphere",
        subtitle: "Atmosphere"
    },
    Clear: {
        iconName: "day-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sun is shining",
        subtitle: "Go get your vitamin D !"
    },
    Clouds: {
        iconName: "cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds are everywhere",
        subtitle: "I know, it is boring"
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.halfContainer}>
                <Fontisto name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}{<Icon name="celsius-line" size="32" color="white" />}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white",
        fontFamily: "Manrope",
    },
    title: {
        color: "white",
        fontSize: 44,
        marginBottom: 10,
        fontWeight: "500"
    },
    subtitle: {
        fontWeight: "300",
        color: "white",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start"
    },
});


