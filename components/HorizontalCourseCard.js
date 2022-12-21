import {TouchableOpacity, ImageBackground, View, Image} from 'react-native';
import { COLORS,SIZES,FONTS,icons,images } from "../constants";
import IconLable from './IconLable';
const HorizontalCourseCard = ({containerStyle, course}) => {
    return (
        <TouchableOpacity
        style={{
            flexDirection: 'row',
            ...containerStyle
        }}>
            {/* Thumbnail */}
            <ImageBackground source={images.thumbnail_2}
            resizeMode="cover"
            style={{
                width: 130,
                height: 130,
                marginBottom:  SIZES.radius, 
            }}
            imageStyle={{borderRadius: SIZES.radius}}
            >
                <View style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: COLORS.white
                }}>
                    <Image
                     source={icons.favourite}
                     resizeMode="contain"
                     style={{
                        width: 20,
                        height: 20,
                        tintColor: course.is_favorite ? COLORS.secondary : COLORS.additionalColor4,
                     }}
                     />
                </View>
            </ImageBackground>
            {/* Detail section of popular courese */}
            <View style={{
                flex: 1,
                marginLeft: SIZES.base 
            }}>
                <Text style={{
                    ...FONTS.h3,
                    fontSize: 18,
                }}>
                {course.title}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.base
                }}>
                    <Text style={{...FONTS.body4}}> By {course.instructor} </Text>
                    <IconLable
                      icon={icons.time}
                      lable={course.duration}
                      iconStyle={{
                        width: 15,
                        height: 15,
                      }}
                      containerStyle={{marginLeft: SIZES.base}}
                      lableStyle={{
                        ...FONTS.body4
                      }}
                    />
                </View>
                <View style={{
                     flexDirection: 'row',
                     alignItems: 'center',
                     marginTop: SIZES.base
                }}>
                    <Text style={{
                        color: COLORS.primary,
                        ...FONTS.h2
                     }}
                    >
                        FCFA{course.price.toFixed(2)}
                    </Text>
                    <IconLable 
                     icon={icons.star}
                     lable={course.rating}
                     iconStyle={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.primary2
                      }}
                      containerStyle={{marginLeft: SIZES.base}}
                      lableStyle={{
                        marginLeft: 5,
                        color: COLORS.black,
                        ...FONTS.h3
                      }}
                     />
                </View>
            </View>
        </TouchableOpacity>
    );
}


export default HorizontalCourseCard;
