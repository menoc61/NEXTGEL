import {TouchableOpacity,Text} from 'react-native';
import { COLORS,FONTS } from '../constants';
const TextButton = ({contentContainerStyle,lable,lableStyle,onPress,disabled}) => {
    return (
        <TouchableOpacity
        style={{
            alignContent:   'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            ...contentContainerStyle
        }}
        disabled={disabled}
        onPress={onPress}>
            <Text style={{
                color: COLORS.white,
                ...FONTS.h3,
                ...lableStyle
            }}>
                {lable}
            </Text>
        </TouchableOpacity>
    );
}

export default TextButton;
