import { View, Text, StatusBar } from "react-native";
import {styles} from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from "../../colors";
import { Feather } from "@expo/vector-icons";
export default function Header(){
    return(
        <>
            <LinearGradient 
                colors={[COLORS.primaryG.base, COLORS.primaryG.variant]} 
                start={{
                    x: 1,
                    y: 0
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={styles.container} >

                    <Text style={styles.title}>MySheets</Text>
                    <Feather name="user" size={24} color={COLORS.primary4}/>

                </LinearGradient>
        </>
    )
}