
import {StyleSheet} from 'react-native'
import { COLORS } from '../../colors'
import { StatusBar } from 'expo-status-bar'

export const styles = StyleSheet.create({
    container:{
        height:100,
        flexDirection: 'row',
        paddingTop: 60,
        paddingLeft:22,
        paddingRight: 22,
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.primary4
    }
})