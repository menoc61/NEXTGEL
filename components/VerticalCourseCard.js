import {TouchableOpacity,Image,Text, View} from 'react-native';
import { COLORS,SIZES,FONTS,icons,images } from "../constants";
import IconLable from './IconLable';
const VerticalCourseCard = ({containerStyle, course}) => {
    return (
        <TouchableOpacity
        style={{
            width: 270,
            ...containerStyle
        }}>
            {/* Thumbnail */}
            <Image source={images.thumbnail_1}
            resizeMode="cover"
            style={{
                width: "100%",
                height: 150,
                marginBottom:  SIZES.radius,
                borderRadius:   SIZES.radius, 
            }}
            />
            {/* Detail section */}
            <View style={{flexDirection:"row"}}>
                {/* PLAY ICON */}
                <View style={{
                    width: 45,
                    height: 45,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 25,
                    backgroundColor: COLORS.primary
                }}>
                    <Image 
                    source={icons.play} 
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                    }}/>
                </View>
                {/* INFO */}
                <View style={{
                    flexShrink: 1,
                    paddingHorizontal: SIZES.radius
                }}>
                    <Text style={{
                        flex: 1,
                        ...FONTS.h3,
                        fontSize:18
                    }}>
                        {course.title}
                    </Text>
                    <IconLable 
                    icon={icons.time}
                    lable={course.duration} 
                    containerStyle={{marginTop: SIZES.base}}/>
                </View>
            </View>
        </TouchableOpacity>
    );
}


export default VerticalCourseCard;
