import { createRef, useRef,useState, useEffect } from 'react';
import {View,Text,TouchableOpacity,Image,Animated} from 'react-native';
import {Home,Profile,Search} from '../../screens';
import {COLORS,SIZES,FONTS,constants} from '../../constants';
import {Shadow} from 'react-native-shadow-2';

const bottom_tabs = constants.bottom_tabs.map((tab) => ({
    ...tab,
    ref: createRef()
}));
const TabIndicator = ({measureLayout, scrollX}) => {
    const inputRange = bottom_tabs.map((_,i) => i * SIZES.width)
    const TabIndicatorWidth = scrollX.interpolate({
        inputRange,
        outPutRange: measureLayout.map(measure => measure.width)
    })
    const TranslateX = scrollX.interpolate({
        inputRange,
        outPutRange: measureLayout.map(measure => measure.x)
    })
    return (
        <Animated.View
        style={{
            position: 'absolute',
            left: 0,
            height: "100%",
            width:  TabIndicatorWidth,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            transform:[{TranslateX}] 
        }}/>
    )
}
const Tabs = ({scrollX, onBottonTabPress}) => {
    const containerRef = useRef();
    const [measureLayout, setmeasureLayout] = useState([]);

    useEffect(() => {
        let ml = [];
        bottom_tabs.forEach(bottom_tab => {
            bottom_tab?.ref?.current?.measureLayout(
                containerRef.current,(x,y,width,height) => {
                    ml.push({x,y,width,height});
                    if (ml.length === bottom_tabs.length)  setmeasureLayout(ml);
                })
        })
    }, [containerRef.current]);
    return(
        <View ref={containerRef}
        style={{
            flex: 1,
            flexDirection: 'row',
        }}>
            {/* Tab indicator */}
            {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX}/>}
            {/* Tabs */}
            {bottom_tabs.map((tab, index) => {
                return(
                    <TouchableOpacity
                    key={`bottomTab-${index}`}
                    ref={tab.ref}
                    onPress={() => onBottonTabPress(index)}
                    style={{
                        flex: 1,
                        paddingHorizontal: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                        <Image
                         source={tab.icon}
                         resizeMode="contain"
                         style={{
                            width: 25,
                            height: 25,
                        }}
                        />
                        <Text style={{
                            marginTop:  3,
                            color: COLORS.white
                        }}
                        >{tab.label}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
};
const MainLayout = () => {
    const FlatListRef = useRef();
    const scrollX = useRef(new Animated.Value(0)).current;
    const onBottonTabPress = useCallback(
      (bottonTabIndex) => {
        FlatListRef?.current?.scrollToOffset({
            offset: bottonTabIndex * SIZES.width
        })
      }
    )
    

    function renderContent () {
        return (
        <View style={{flex:1}}>
            <Animated.FlatList 
                ref={FlatListRef}
                pagingEnabled
                horizontal
                scrollEnabled={false}
                snapToAlignment="center"
                snapToInterval={SIZES.width}
                declarationRate="fast"
                showhorizontalScrollIndicator={false}
                data={constants.bottom_tabs}
                keyExtractor={item => `Main-${item.id}`}
                onScroll={Animated.event([
                    {nativeEvent: {ContentOffset:{x: scrollX}}}
                    ],{useNativeDriver: false}
                    )}
                    renderItem={({item,index}) => {
                        return(
                            <View style={{
                                height: SIZES.height,
                                width: SIZES.width
                            }}>
                                {item.label == constants.screens.home && <Home/>}
                                {item.label == constants.screens.search && <Search/>}
                                {item.label == constants.screens.profile && <Profile/>}
                            </View>
                        )}}
            />
        </View>
    )}

    function renderBottom_tabs(){

        return (
            <View style={{
                marginBottom: 20,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
            }}>
                <Shadow size={[SIZES.width - (SIZES.padding * 2 ), 85]}>
                    <View style={{
                        flex: 1,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary3
                    }}>
                        <Tabs scrollX={scrollX} onBottonTabPress={onBottonTabPress}/>
                    </View>
                </Shadow>
            </View>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
            ...FONTS.h3,
        }}>
            {/* content */}
            {renderContent()}

            {/* bottom tab */}
            {renderBottom_tabs()}
        </View>
    )
}

export default MainLayout;