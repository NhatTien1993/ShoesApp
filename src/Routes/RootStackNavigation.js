
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { KEY_SCREEN, ICONS, COLORS } from "../common/Constant";
import HomePage from "../screen/HomePage/HomePage";
import AddShoes from "../screen/AddShoes/AddShoes";
import SearchShoes from "../screen/SearchShoes/SearchShoes";
import CartShoes from "../screen/CartShoes/CartShoes";
import DetailShoes from "../screen/DetailShoes/DetailShoes";
import User from "../screen/User/User"
import AllShoes from "../screen/AllShoes/AllShoes";
import { Image, View, TouchableOpacity } from "react-native";
import SignUp from "../screen/LoginandSignUp/SignUp";
import SignIn from "../screen/LoginandSignUp/SignIn";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


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
                height: 55,
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
                        padding: 6,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
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
                        padding: 6,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
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
                        padding: 6,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
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
                        padding: 6,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
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
                        padding: 6,
                        backgroundColor: focused ? COLORS.primary : COLORS.dark,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
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

const RootStackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
        <Stack.Screen
            name={KEY_SCREEN.tabHome}
            component={TabBarNavigator}
        />
        <Stack.Screen
            name={KEY_SCREEN.detailShoes}
            component={DetailShoes}
        />
        <Stack.Screen
            name={KEY_SCREEN.allShoes}
            component={AllShoes}
        />
        {/* SignUp */}
        {/* <Stack.Screen
            name={KEY_SCREEN.signUp}
            component={SignUp}
        /> */}
        {/* SignIn */}
        <Stack.Screen
            name={KEY_SCREEN.signIn}
            component={SignIn}
        />
    </Stack.Navigator>
)
export { RootStackNavigator }