import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import {styles} from './styles'

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>All I Ask</Text>
                <Text style={styles.date}>21/05</Text>
            </View>
            <View  style={styles.cloud}>
                <Feather name="cloud" color={'green'} size={22}/>
            </View>
        </View>
    )
}