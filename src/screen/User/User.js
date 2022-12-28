import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScreenContainer} from 'react-native'
import React from 'react'
/**
 * Create Profile:
 * @returns NguyentruongKhoiNguyen
 */
export default function User() {
    return (
        <View>
            <Text>Athletic Shose</Text>
            <Text>App Description</Text>
            <TouchableOpacity>
                <Text>@twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Website</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <Text>Terms & Conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text>Privacy Policy</Text>
            </TouchableOpacity>     
                        
              <Text>Version 1.01</Text>
        </View>
    );
}
const styles = StyleSheet.create({})