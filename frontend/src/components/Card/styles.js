import { StyleSheet } from "react-native";
import {COLORS} from '../../colors'
import {FONT} from '../../typography'

export const styles = StyleSheet.create({
    container:{
        width: 180,
        height:70,
        paddingLeft:8,
        paddingTop: 8,
        paddingRight: 8,
        borderRadius:3,
        paddingBottom: 8,
        marginBottom: 8,
        backgroundColor: COLORS.primary1
    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontSize: FONT.title.size,
        fontWeight:'bold',
        color: COLORS.primary4
    },
    date:{
        fontSize: FONT.body.size,
        color: COLORS.base2
    },
    cloud:{
        flexDirection:'column',
        alignSelf:"flex-end",
        flexGrow:1,
        justifyContent: "flex-end",
    }
})