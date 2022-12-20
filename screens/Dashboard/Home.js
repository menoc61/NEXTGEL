import {IconButton,LineDivider,TextButton, VerticalCourseCard} from '../../components/';
import { View,Text,ImageBackground,Image,ScrollView } from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { COLORS,SIZES,FONTS,icons,images,dummyData } from "../../constants";
const Home = () => {

    function renderHeader() {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop:  40,
            marginBottom: 10,
            paddingHorizontal: SIZES.padding,
            alignItems: 'center',
        }}>
            {/* Greeting */}
            <View style={{flex:1}}>
                <Text style={{...FONTS.h2}}> Hello world!!</Text>
                <Text style={{...FONTS.body3, color: COLORS.gray50}}> Tuesday, 12th Dec 2022 </Text>

            </View>
            {/* Notification */}
            <IconButton
            icon={icon.notification}
            iconStyle={{tintColor: COLORS.black}}
            />
        </View>
    )}

    function renderStartLearning(){
        return(
            <ImageBackground
            source={images.featured_bg_image}
            style={{
                alignItems:'flex-start',
                marginHorizontal: SIZES.padding,
                marginTop: SIZES.padding,
                padding: 15
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}>
                    {/* Info section */}
                    <View>
                        <Text style={{color: COLORS.white,...FONTS.body2}}>How To</Text>
                        <Text style={{
                            color: COLORS.white,...FONTS.h2
                            }}>Make your brand more visible with our checklist</Text>
                        <Text style={{
                            marginTop: SIZES.radius,
                            ...FONTS.h2,
                            color: COLORS.white
                        }}>By Momeni Gilles</Text>
                    </View>
                    {/* Image */}
                    <Image 
                    source={images.start_learning}
                    style={{
                        width: "100%",
                        height: 110,
                        marginTop: SIZES.padding
                    }}
                    />
                    {/* Button */}
                    <TextButton
                    lable="Start learning"
                    contentContainerStyle={{
                        height: 40,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 20,
                        backgroundColor: COLORS.white
                    }}
                    lableStyle={{color: COLORS.black,}}
                    />
            </ImageBackground>
        )}

    function renderCourses(){
        return(
            <FlatList
            horizontal
            data={dummyData.courses_list_1}
            listKey="courses"
            keyExtractor={item => `Course_${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginTop: SIZES.padding}}
            renderItem={({item,index}) => (
                <VerticalCourseCard 
                containerStyle={{
                    marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                    marginRight: index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0,
                }}
                course={item}/>
            )}
            />
        )
    }
    return (
        <View
        style={{
            flex: 1,
            backgroundColor: COLORS.white,
        }}>
            {/* Header */}
            {renderHeader()}
            {/* Content */}
            <ScrollView 
            contentContainerStyle={{
                paddingBottom: 150,
            }}
            showsVerticalScrollIndicator={false}
            >
                {/* Start learning section */}
                {renderStartLearning()}
                {/* List of cours section */}
                {renderCourses()}

                <LineDivider lineStyle={{
                    marginVertical: SIZES.padding
                }}/>
            </ScrollView>
        </View>
    )
}

export default Home;