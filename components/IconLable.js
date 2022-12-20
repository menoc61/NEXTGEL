import { View, Text,Image } from 'react-native';
import { COLORS,SIZES,FONTS } from "../constants";

const IconLable = ({containerStyle,icon,iconStyle,lable, lableStyle}) => {
  return (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...containerStyle
    }}>
        <Image 
        style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray30,
            ...iconStyle
        }}
        source={icon}/>
   
      <Text style={{
        marginLeft: SIZES.font,
        color: COLORS.gray30,
        ...FONTS.h3,
        ...lableStyle
      }}>{lable}</Text>
    </View>
  )
}

export default IconLable