import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';


export function Loading() {

    return (
        <View style={[StyleSheet.absoluteFill, styles.container]}>
            <View style={{ width: 100, height: 100 }}>
                <LottieView source={require('../assets/lf30_editor_fwei90v7.json')} autoPlay loop />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1
    }
})