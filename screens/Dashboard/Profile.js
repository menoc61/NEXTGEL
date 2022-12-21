import { View,Text,Image,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';
import {COLORS,FONTS,SIZES,icons,images} from '../../constants'
import {IconButton,TextButton,LineDivider, ProgressBar} from '../../components'
const Profile = () => {
    function renderHeader(){
        return(
            <View style={{
                flexDirection: "row",
                marginTop:  50,
                paddingHorizontal: SIZES.padding,
                justifyContent: 'space-between'
            }}>
                <Text style={{...FONTS.h1}}>Profile</Text>
                <IconButton 
                 icon={icons.sun}
                 iconStyle={{tintColor: COLORS.black}}
                 />
            </View>
        )
    }

    function renderProfileCard(){
        return(
            <View style={{
                flexDirection:'row',
                marginTop: SIZES.padding,
                paddingHorizontal:  SIZES.radius,
                paddingVertical: 20,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary3,
            }}>
                {/* Profile Picture */}
                <TouchableOpacity
                    style={{
                        width: 80,
                        height: 80,
                    }}
                >
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: COLORS.white
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        alignItems: 'center',
                        justifyContent: 'flex-end',

                    }}>
                        <View style={{
                            marginBottom: -15,
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15,
                            backgroundColor: COLORS.primary
                        }}>
                            <Image source={icons.camera} resizeMode="contain" style={{width: 17,height:17}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Detail Section */}
                <View style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    alignItems: 'flex-start'

                }}>
                    <Text style={{color: COLORS.white,...FONTS.h2}}> Momeni Gilles </Text>
                    <Text style={{color: COLORS.white,...FONTS.body4}}> SE3 </Text>
                    {/* ProgressBar */}
                    <ProgressBar 
                        progress="58%"
                        containerStyle={{
                            marginTop: SIZES.radius,
                            
                        }}
                    />
                    <View style={{flexDirection:"row",}}>
                        <Text style={{
                            flex: 1,
                            color: COLORS.white,
                            ...FONTS.body4
                            }}>OverALL Progress</Text>
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.body4
                            }}>58%</Text>  
                    </View>
                    {/* Members Section*/}
                            <TextButton
                                lable="+ Become Member"
                                contentContainerStyle={{
                                    height: 35,
                                    marginTop: SIZES.padding,
                                    paddingHorizontal: SIZES.radius,
                                    borderRadius: 20,
                                    backgroundColor: COLORS.white
                                }}
                            />
                </View>
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
        }}> 
            {/* Header Section */}
            {renderHeader()}
            <ScrollView
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding,
                paddingBottom: 158
            }}>
                {/* Profile Card */}
                {renderProfileCard()}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    ProfileSelectionContainer:{
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray20
    }
})
export default Profile;