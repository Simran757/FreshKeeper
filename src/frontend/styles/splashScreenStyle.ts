import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },

  logo: {
    width: width * 0.72,
    height: width * 0.72,
  },

  leaf: {
    position: "absolute",
    width: 28,
    height: 28,
    opacity: 0.25,
    tintColor: "#7BC96F",
  },

  leafLarge: {
    position: "absolute",
    width: 60,
    height: 60,
    opacity: 0.2,
    tintColor: "#7BC96F",
  },

waveContainer: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: 220,
  overflow: "hidden",
},

waveBack: {
  position: "absolute",
  bottom: 0,
  left: "-20%",
  width: "140%",
  height: 140,
  backgroundColor: "#EDF8EB",
  borderTopLeftRadius: 250,
  borderTopRightRadius: 350,
},

waveFront: {
  position: "absolute",
  bottom: -20,
  left: "-10%",
  width: "120%",
  height: 120,
  backgroundColor: "#E3F2DF",
  borderTopLeftRadius: 220,
  borderTopRightRadius: 280,
},

loadingContainer: {
  position: "absolute",
  bottom: 40,
  width: "100%",
  alignItems: "center",
},

  loadingText: {
    marginTop: 18,
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "500",
  },
buttonContainer: {
  width: "85%",
  marginTop: 25,
  flexDirection: "row",
  justifyContent: "space-between",
},

loginButton: {
  flex: 1,
  height: 52,
  backgroundColor: "#2E9B37",
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  marginRight: 8,
  elevation: 4,
},

loginButtonText: {
  color: "#FFF",
  fontSize: 16,
  fontWeight: "600",
},

registerButton: {
  flex: 1,
  height: 52,
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 8,
  borderWidth: 1.5,
  borderColor: "#2E9B37",
  backgroundColor: "#FFFFFF",
},

registerButtonText: {
  color: "#2E9B37",
  fontSize: 16,
  fontWeight: "600",
},
});

export default styles;