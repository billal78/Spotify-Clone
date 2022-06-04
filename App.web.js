import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
//import { useFonts } from 'expo-font';
import {useFonts, Montserrat_700Bold, Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import channels from './data.js';
import mixes from './data__.js';



export default function App() {


  const [loaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!loaded) {
    return (<View></View>);
  }


  /*
<View style={{height:50, backgroundColor:"#ffffff", opacity:0.01, width:392, zIndex:3}}>

  </View>
*/


  return (<View style={styles.container}>

    

  <View style={{height:50, top:823, width:352, zIndex:3, flexDirection:'row', justifyContent:'space-around', marginLeft:25}}>

    <View style={{height:50, width:60,alignItems:'center'}}>

      <Image style={{height:25, width:25}} source={{uri:"https://i.ibb.co/2j2Jh03/Cropped-Image-20220429-162418.png"}}></Image>
      

      <Text style={{width:60, color:"#ffffff", fontSize:10, textAlign:'center', top:4}}>Accueil</Text>

    </View>



    <View style={{height:50, width:60, alignItems:'center'}}>

      <Image style={{height:25, width:25}} source={{uri:"https://i.ibb.co/fFFqY6y/Cropped-Image-20220429-165359.png"}}></Image>

      <Text style={{width:60, color:"#ffffff", fontSize:10, textAlign:'center', top:4}}>Rechercher</Text>

    </View>



    <View style={{height:50, width:60, alignItems:'center'}}>

      <Image style={{height:25, width:25, marginLeft:-2}} source={{uri:"https://i.ibb.co/YtSRhCD/Cropped-Image-20220429-165534.png"}}></Image>

      <Text style={{width:60, color:"#ffffff", fontSize:10, textAlign:'center', top:4}}>Bibliothèque</Text>
      
    </View>

  

        

  </View>

    <ScrollView>
      <View style={{height:50, backgroundColor:"#121212", top:20, justifyContent:'center'}}>
        <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:20, marginLeft:10}}>Bonjour</Text>
        <Image style={{height:25, width:25, position:'absolute', marginLeft:250}} source={{uri:"https://i.ibb.co/nMX1wN1/Cropped-Image-20220429-135401.png"}}></Image>
        <Image style={{height:25, width:25, position:'absolute', marginLeft:295}} source={{uri:"https://i.ibb.co/wJX2XfG/Cropped-Image-20220429-135426.png"}}></Image>
        <Image style={{height:25, width:25, position:'absolute', marginLeft:340}} source={{uri:"https://i.ibb.co/b3zqKcS/Cropped-Image-20220429-135449.png"}}></Image>  
      </View>

      <View style={{height:180, backgroundColor:"#121212", top:25, marginLeft:20, marginRight:20}}>

        <View style={{width:175, height:55, backgroundColor:"#2f2f2f", borderRadius:4.5, position:'absolute', justifyContent:'center'}}>
          <Image style={{zIndex:2, height:55, width:55, position:'absolute', marginLeft:0, borderRadius:4.5}} source={{uri:"http://media.culturepsg.com/image/news/podcast_culturepsg.jpg"}}></Image>
          <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:12, marginLeft:65, width:100}}>Podcast de CulturePSG</Text>
        </View>

        <View style={{width:175, height:55, backgroundColor:"#2f2f2f", borderRadius:4.5, position:'absolute', marginLeft:180, justifyContent:'center'}}>
          <Image style={{zIndex:2, height:55, width:55, position:'absolute', marginLeft:0, borderRadius:4.5}} source={{uri:"http://media.culturepsg.com/image/news/podcast_culturepsg.jpg"}}></Image>
          <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:12, marginLeft:65, width:100}}>Podcast de CulturePSG</Text>
        </View>


        <View style={{width:175, height:55, backgroundColor:"#2f2f2f", borderRadius:4.5, position:'absolute', top:60, justifyContent:'center'}}>
        <Image style={{zIndex:2, height:55, width:55, position:'absolute', marginLeft:0, borderRadius:4.5}} source={{uri:"http://media.culturepsg.com/image/news/podcast_culturepsg.jpg"}}></Image>
        <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:12, marginLeft:65, width:100}}>Podcast de CulturePSG</Text>          

        </View>

        <View style={{width:175, height:55, backgroundColor:"#2f2f2f", borderRadius:4.5, position:'absolute', marginLeft:180, top:60, justifyContent:'center'}}>
        <Image style={{zIndex:2, height:55, width:55, position:'absolute', marginLeft:0, borderRadius:4.5}} source={{uri:"http://media.culturepsg.com/image/news/podcast_culturepsg.jpg"}}></Image>
          <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:12, marginLeft:65, width:100}}>Podcast de CulturePSG</Text>
        </View>




        <View style={{width:175, height:55, backgroundColor:"#2f2f2f", borderRadius:4.5, position:'absolute', top:120, justifyContent:'center'}}>
        <Image style={{zIndex:2, height:55, width:55, position:'absolute', marginLeft:0, borderRadius:4.5}} source={{uri:"http://media.culturepsg.com/image/news/podcast_culturepsg.jpg"}}></Image>
          <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:12, marginLeft:65, width:100}}>Podcast de CulturePSG</Text>
        </View>

        <View style={{width:175, height:55, backgroundColor:"#2f2f2f", borderRadius:4.5, position:'absolute', marginLeft:180, top:120, justifyContent:'center'}}>
        <Image style={{zIndex:2, height:55, width:55, position:'absolute', marginLeft:0, borderRadius:4.5}} source={{uri:"http://media.culturepsg.com/image/news/podcast_culturepsg.jpg"}}></Image>
          <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:12, marginLeft:65, width:100}}>Podcast de CulturePSG</Text>
        </View>

      </View>

      <View style={{top:75}}>


        <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:22, marginLeft:15}}>Vos émissions</Text>


        <ScrollView style={{height:400}} horizontal showsHorizontalScrollIndicator={false}>

        {channels.map(channel => (

        <View style={{marginLeft:15, width:160, height:230, marginTop:10.5, backgroundColor:"#121212"}} key = {channel.key} >
        <Image style = {{height:160, width:160, zIndex: 19, borderRadius: 10, backgroundColor:"#121212"}} source={{uri:channel.icon}}></Image>
        <Text style = {{fontSize:12, textAlign:'left', color:"#ffffff", top:10, fontFamily:'Montserrat_700Bold'}} numberOfLines={2}>{channel.name}</Text>
        <Text style = {{fontSize:12, textAlign:'left', color:"#959595", top:15, fontFamily:'Montserrat_700Bold'}} numberOfLines={2}>{"Emission • "+ channel.autor}</Text>
        
        </View>
        ))}

        </ScrollView>

        

                  

                  
      </View>


      <View style={{top:0}}>


        <Text style={{color:"#ffffff", fontFamily:'Montserrat_700Bold', fontSize:22, marginLeft:15}}>Vos mix préférés</Text>


        <ScrollView style={{height:400}} horizontal showsHorizontalScrollIndicator={false}>

        {mixes.map(channel => (

        <View style={{marginLeft:15, width:160, height:230, marginTop:10.5, backgroundColor:"#121212"}} key = {channel.key} >
        <Image style = {{height:160, width:160, zIndex: 19, backgroundColor:"#121212"}} source={{uri:channel.icon}}></Image>

        <Text style = {{fontSize:12, textAlign:'left', color:"#ffffff", top:-30,left:15, fontFamily:'Montserrat_700Bold', zIndex:20}} numberOfLines={2}>{"Mix "+ channel.name}</Text>
        <Text style = {{fontSize:12, textAlign:'left', color:"grey", top:-10, fontFamily:'Montserrat_400Regular'}} numberOfLines={2}>{channel.autor}</Text>
        <View style={{backgroundColor:'yellow', width:160, height:5, top:155, zIndex:20, position:'absolute'}}></View>
        
        </View>
        ))}

        </ScrollView>

        

                  

                  
      </View>

    
      
    </ScrollView>


    


  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',

  },
});
