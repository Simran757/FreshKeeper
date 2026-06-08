import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "../styles/splashScreenStyle";


const SplashScreen = () => {
  return (
    <LinearGradient
      colors={["#F9FFF6", "#FFFFFF", "#F3FAF1"]}
      style={styles.container}
    >
      {/* Floating Leaves */}
      <Image
        source={require("../../assets/leaf.png")}
        style={[styles.leaf, { top: 120, left: 60 }]}
      />

      <Image
        source={require("../../assets/leaf.png")}
        style={[styles.leaf, { top: 220, right: 80 }]}
      />

      <Image
        source={require("../../assets/leaf.png")}
        style={[styles.leafLarge, { bottom: 220, left: 30 }]}
      />

      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      {/* Bottom Wave */}
      <View style={styles.waveContainer}>
        <View style={styles.waveBack} />
        <View style={styles.waveFront} />
        <View style={styles.loadingContainer}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;
