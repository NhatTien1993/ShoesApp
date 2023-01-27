
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { KEY_SCREEN, ICONS, COLORS, SIZES } from "../common/Constant";
import HomePage from "../screen/HomePage/HomePage";
import AddShoes from "../screen/AddShoes/AddShoes";
import SearchShoes from "../screen/SearchShoes/SearchShoes";
import CartShoes from "../screen/CartShoes/CartShoes";
import DetailShoes from "../screen/DetailShoes/DetailShoes";
import User from "../screen/User/User"
import AllShoes from "../screen/AllShoes/AllShoes";
import FilterShoes from '../screen/FilterShoes/FilterShoes'
import AlertMessage from "../screen/FlashScreen/AlertMessage";
import FlashMessage from "../screen/FlashScreen/FlashMessage";
import { Image, View, TouchableOpacity, Platform } from "react-native";
import SignUp from "../screen/LoginandSignUp/SignUp";
import SignIn from "../screen/LoginandSignUp/SignIn";
import Profile from "../screen/Profile/Profile";
import ChangePassword from "../screen/User/ChangePassword";
import ChangeAvatar from "../screen/User/ChangeAvatar";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const StackModal = createStackNavigator()
const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};
const config1 = {
    animationEnabled: true,
    cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
            opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
            }),
        },
        overlayStyle: {
            opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.2],
                extrapolate: 'clamp',
            }),
        },

    }),
}

const TabBarNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 15,
                left: 15,
                right: 15,
                borderRadius: 15,
                height: SIZES.height(6),
                backgroundColor: COLORS.dark,
            }
        }}
    >
        <Tab.Screen
            name={KEY_SCREEN.homePage}
            component={HomePage}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        padding: 10,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        marginBottom: Platform.OS === 'ios' ? -30 : 0,
                        justifyContent: 'center',
                    }}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: COLORS.bcground
                            }}
                            source={ICONS.iconHome}
                        />
                    </View>
                ),
            }}
        />
        <Tab.Screen
            name={KEY_SCREEN.searchShoes}
            component={SearchShoes}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        padding: 10,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        marginBottom: Platform.OS === 'ios' ? -30 : 0,
                    }}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: COLORS.bcground
                            }}
                            source={ICONS.iconSearch}
                        />
                    </View>
                ),
            }}
        />
        <Tab.Screen
            name={KEY_SCREEN.addShoes}
            component={AddShoes}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        padding: 10,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        marginBottom: Platform.OS === 'ios' ? -30 : 0,
                    }}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: COLORS.bcground
                            }}
                            source={ICONS.iconAdd}
                        />
                    </View>
                ),
            }}
        />
        <Tab.Screen
            name={KEY_SCREEN.cartShoes}
            component={CartShoes}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        padding: 10,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        marginBottom: Platform.OS === 'ios' ? -30 : 0,
                    }}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: COLORS.bcground
                            }}
                            source={ICONS.iconCart}
                        />
                    </View>
                ),
            }}
        />
        <Tab.Screen
            name={KEY_SCREEN.user}
            component={User}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        padding: 10,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        marginBottom: Platform.OS === 'ios' ? -30 : 0,
                    }}>
                        <Image
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: COLORS.bcground
                            }}
                            source={ICONS.iconUser}
                        />
                    </View>
                ),
            }}
        />
    </Tab.Navigator>
)
const StackModalNavigator = () => (
    <StackModal.Navigator
        initialRouteName={KEY_SCREEN.signIn}
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}
    >
        {/* SignIn */}
        <StackModal.Screen
            name={KEY_SCREEN.signIn}
            component={SignIn}
        />
        {/* SignUp */}
        <StackModal.Screen
            name={KEY_SCREEN.signUp}
            component={SignUp}
        />
        <StackModal.Screen
            name={KEY_SCREEN.tabHome}
            component={TabBarNavigator}
        />
        <StackModal.Screen
            name={KEY_SCREEN.flashMessage}
            component={FlashMessage}
            options={{
                presentation: 'transparentModal',
                transitionSpec: {
                    open: config,
                    close: config,
                },
                gestureDirection: 'vertical'

            }}
        />
        <StackModal.Screen
            presentation=''
            name={KEY_SCREEN.alertMessage}
            component={AlertMessage}
            options={{
                presentation: 'transparentModal',
                transitionSpec: {
                    open: config,
                    close: config,
                },
                gestureDirection: 'horizontal'
            }}
        />
        <StackModal.Screen
            name={KEY_SCREEN.allShoes}
            component={AllShoes}
        />

        <StackModal.Screen
            name={KEY_SCREEN.detailShoes}
            component={DetailShoes}
        />
        <StackModal.Screen
            name={KEY_SCREEN.profile}
            component={Profile}
        />
        <StackModal.Screen
            name={KEY_SCREEN.changePassword}
            component={ChangePassword}
        />
        <StackModal.Screen
            name={KEY_SCREEN.filterShoes}
            component={FilterShoes}
            options={{
                presentation: 'transparentModal',
                transitionSpec: {
                    open: config,
                    close: config,
                },
                gestureDirection: 'vertical'

            }}
        />
        <StackModal.Screen
            name={KEY_SCREEN.changeAvatar}
            component={ChangeAvatar}
            options={{
                presentation: 'transparentModal',
                animationEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 0.5, 0.9, 1],
                            outputRange: [0, 0.25, 0.7, 1],
                        }),
                    },
                    overlayStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.5],
                            extrapolate: 'clamp',
                        }),
                    },

                }),
                ...TransitionPresets.FadeFromBottomAndroid,

            }}
        />
    </StackModal.Navigator>
)
const RootStackNavigator = () => (
    <Stack.Navigator
        initialRouteName={KEY_SCREEN.signIn}
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            ...config1
        }}>
        {/* SignIn */}
        <Stack.Screen
            name={KEY_SCREEN.signIn}
            component={SignIn}
        />
        {/* SignUp */}
        <Stack.Screen
            name={KEY_SCREEN.signUp}
            component={SignUp}
        />
        <Stack.Screen
            name={KEY_SCREEN.tabHome}
            component={TabBarNavigator}
        />
        <Stack.Screen
            name={KEY_SCREEN.flashMessage}
            component={FlashMessage}
            options={{
                presentation: 'transparentModal',
                transitionSpec: {
                    open: config,
                    close: config,
                }
            }}
        />
        <Stack.Screen
            presentation=''
            name={KEY_SCREEN.alertMessage}
            component={AlertMessage}
            options={{
                presentation: 'transparentModal',
                transitionSpec: {
                    open: config,
                    close: config,
                },
                gestureDirection: 'horizontal'
            }}
        />
        <Stack.Screen
            name={KEY_SCREEN.allShoes}
            component={AllShoes}
        />

        <Stack.Screen
            name={KEY_SCREEN.detailShoes}
            component={DetailShoes}
        />
        <Stack.Screen
            name={KEY_SCREEN.profile}
            component={Profile}
        />
        <Stack.Screen
            name={KEY_SCREEN.changePassword}
            component={ChangePassword}
        />
        <Stack.Screen
            name={KEY_SCREEN.filterShoes}
            component={FilterShoes}
            options={{
                presentation: 'transparentModal',
                transitionSpec: {
                    open: config,
                    close: config,
                },
                gestureDirection: 'vertical'

            }}
        />
        <Stack.Screen
            name={KEY_SCREEN.changeAvatar}
            component={ChangeAvatar}
            options={{
                presentation: 'transparentModal',
                transitionSpec: {
                    open: config,
                    close: config,
                },
                gestureDirection: 'vertical'

            }}
        />
    </Stack.Navigator>
)
export { StackModalNavigator, RootStackNavigator }