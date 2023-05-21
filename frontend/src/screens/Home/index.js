import { View, Text, StatusBar } from "react-native";
import MyTextInput from "../../components/TextInput";
import Header from '../../components/Header'
import Card from '../../components/Card'
import { styles } from "./styles";

export default function Home(){
    return(
        <View>
            
            <Header/>
            <MyTextInput/>

            <View style={styles.container}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </View>
            
        </View>
    )
}