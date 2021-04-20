
import React, { useState, useEffect } from "react";
import { Video, AVPlaybackStatus } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import {
ImageBackground,
Text,
Linking,
Image,
View,
SafeAreaView,
ScrollView,
Modal,
Pressable,
Dimensions,
_ScrollView
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const App = () => {
const [dimensions, setDimensions] = useState({ window, screen });
const [mode, setMode] = useState("portrait");
const [modalVisible, setModalVisible] = useState(false);
const video = React.useRef(null);
const [status, setStatus] = React.useState({});
const [playing, setPlaying] = useState(false);


const image2 = {
uri:
"https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg",
};



const modeMaker = () => {
if (dimensions.screen.width > dimensions.screen.height) {
setMode("landscape")

} else {
setMode("portrait")

}
console.log(mode)
};

const onChange = ({ window, screen }) => {
setDimensions({ window, screen });
};

useEffect(() => {
Dimensions.addEventListener("change", onChange);

return () => {
Dimensions.removeEventListener("change", onChange),
modeMaker();
};

});


return (
<SafeAreaView style={styles.container}>

<Modal
    animationType="fade"
    transparent={false}
    visible={modalVisible}
    supportedOrientations={['landscape']} 
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.centeredView}>
        <View style={styles.video2}>
    <WebView
    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/cqyziA30whE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}
 />
    </View>

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
    
    </View>
  </Modal>


<ScrollView >
<View style={styles.contentBorder}>
<View style={styles.navContainer}>

<LinearGradient
colors={['#0f43a6', '#6a98db']}
style={styles.navBackground}
/>

<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

<View style={styles.navButton} onPress={() => Linking.openURL('')}>
<Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Home</Text>
</View>

<View style={styles.navButton} onPress={() => setModalVisible(true)}>
<Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2} onPress={() => setModalVisible(true)}>VideoInModal</Text>
</View>

<View style={styles.navButton} onPress={() => Linking.openURL('')}>
<Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Portfolio</Text>
</View>


<View style={styles.navButton} onPress={() => Linking.openURL('')}>
<Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Services</Text>
</View>


<View style={styles.navButton} onPress={() => Linking.openURL('')}>
<Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Contact</Text>
</View>

</ScrollView>
</View>


<View style={styles.imageContainer}>
<Video
ref={video}
style={styles.video}
source={{
uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
}}
useNativeControls
resizeMode="contain"
isLooping
onPlaybackStatusUpdate={status => setStatus(() => status)}/> 

</View>




<View style={ styles.text} >
<LinearGradient
colors={['#e5effc', '#6a98db']}
style={styles.navBackground}
/>

<ScrollView style={styles.contentText} horizontal={false} showsHorizontalScrollIndicator={true} >
<View>
<Text style={styles.h1Text}>The Title of an Article</Text>
<Text style={styles.p}>You may use this template on any site, anywhere, for free just please leave
the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well;
enjoy :)

{"\n"} {"\n"}Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien.
Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc.
Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula
pellentesque quam.{"\n"}{"\n"}</Text>


<Text style={styles.h1Text}> So Many Titles, So Little Time.</Text>
<Text style={styles.p}> You may use this template on any site, anywhere, for free just please leave the
link back to me in the footer.This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :){"\n"}{"\n"}
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet 
neque vitae sapien bibendum sodales. 
Curabitur elementum. Duis imperdiet. Donec eleifend
porttitor sapien. Praesent leo. Quisque auctor velit sed
tellus. Suspendisse potenti. Aenean laoreet imperdiet 
nunc. Donec commodo suscipit dolor. Aenean nibh. 
Sed id odio. Aliquam lobortis risus ut felis.
Sed vehicula pellentesque quam.{"\n"}{"\n"}Vestibulum augue quam, 
interdum id, congue semper, convallis non, velit. 
Quisque augue tortor, tristique ac, scelerisque eget,
aliquam id, sem. Aenean lorem. Fusce velit nibh, 
dapibus quis, laoreet nec, porta a, dui. Nullam ac 
urna. Proin eget elit. Nunc scelerisque venenatis urna
. Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Class aptent taciti sociosqu ad litora torquent 
per conubia nostra, per inceptos himenaeos. Fusce congue,
turpis ut commodo mattis, pede erat fringilla tellus, pulvinar
suscipit odio lorem sed pede.{"\n"}{"\n"}</Text>

<Text style={styles.h1Text}>Yet Another One!</Text>

<Text style={styles.p}>
You may use this template on any site, anywhere, for free just please leave the link back to me in the footer.
This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) {"\n"} {"\n"}Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum.
Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti.
Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis.
Sed vehicula pellentesque quam.{"\n"}{"\n"}Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor,
tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec,
porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
{"\n"}{"\n"}</Text>


<Text style={styles.footer} onPress={() => Linking.openURL('http://www.bryantsmith.com')}>web development by bryant smith</Text>




</View>
</ScrollView>
</View>

</View>
</ScrollView>
</SafeAreaView >
);
}

const styles = ScaledSheet.create({
container: {
flex: 1,
flexDirection: "column",
backgroundColor: '#043b7c',
alignItems: 'center',
justifyContent: 'center',
},

contentBorder: {
flexDirection: "column",
flex: 1,
marginTop: '35@s',
marginBottom:'10@s',
marginLeft:'10@s',
marginRight:'10@s',
backgroundColor:"#95bff4",
borderWidth: 10,
borderLeftColor:'#ffff',
borderRightColor:'#ffff',
borderTopColor:'#ffff',
borderBottomColor:'#ffff',

},

navBackground: {
position: 'absolute',
left: 0,
right: 0,
top: 0,
height: "100%"
},

navContainer: {
flex: .09,
backgroundColor: '#1a0d00',
flexDirection: "row",


},

// navContainer2: {
// flex: .2,
// backgroundColor: 'white',
// flexDirection: "row",
// },


navBtnTxt: {
color: '#fff3e6',
fontWeight: 'bold',
lineHeight: 30,
fontSize: '18@s',
textDecorationLine: 'underline',
textDecorationStyle: 'dashed',
textDecorationColor: '#000000',
paddingLeft: '15@s',

},
navBtnTxt2: {
color: '#fff3e6',
fontWeight: 'bold',
lineHeight: 40,
fontSize: '20@s',
textDecorationLine: 'underline',
textDecorationColor: '#000000',
paddingLeft: '35@s',
},

navButton: {
flex: 1,
alignItems: "center",
paddingTop:'10@s',
paddingBottom:'10@s',
},

buttonColor:{
backgroundColor:'red'
},


imageContainer: {
flex:.3,
//height: 200,
backgroundColor: "#043a7e",
borderWidth: 10,
borderLeftColor:'#ffff',
borderRightColor:'#ffff',
borderTopColor:'#ffff',
borderBottomColor:'#ffff',
justifyContent: 'center',
alignItems: 'center',

 },
// imageContainer2: {
// flex:.9,
// height: 200,
// backgroundColor: "#043a7e",
// borderWidth: 10,
// borderLeftColor:'#ffff',
// borderRightColor:'#ffff',
// borderTopColor:'#ffff',
// borderBottomColor:'#ffff',

// },

videoView: {
backgroundColor: "#043a7e",
flex: 1,
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',


},
video: {

width:320,
height:200,
alignSelf: 'center',
//height: '80%',
},

image2:{
width: "100%",
height: "100%",
resizeMode: "stretch",
justifyContent: "center",
alignItems: "center"
},


text: {

marginTop: '0@s',
flex: .61,


},

textLandscape: {
marginTop: '0@s',
flex: .1,

},


h1Text: {
paddingTop: '20@s',
paddingBottom: '15@s',
paddingLeft: '10@s',
color: '#1F1603',
fontSize: '20@s',
paddingLeft: '10@s',

},
p: {
lineHeight: '20@s',
paddingLeft: '15@s',
paddingRight:'15@s'

},
a: {
color: '#C87002'
},

footer: {
color: 'black',
marginTop: '15@s',
fontSize: '9@s',
textAlign: 'center',


},
video2: {
    flex:1,
    width: "105%",
    backgroundColor: "black",

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom:20,
  },

  centeredView: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    marginTop: -8,
    alignItems: "center",
    height: "200%",
  },

  textStyle: {
    color: "red",
    fontSize:'20@s',
    fontWeight: "bold",
    textAlign: "center"
  },


});
export default App;
