import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    size: 10,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 8, // 8 hours
    enableCache: false
})

export const saveStorage = (keyName, data) => {
    storage.save({
        key: keyName,
        data: data // dữ liệu lưu trữ có thể là các loại data JS

    })
}

export const getStorage = async (keyName) => {
    try {
        const data = await storage.load({
            key: keyName,
            autoSync: true,
            syncInBackground: true,
        })
        return data
    }catch(error){
        return ""
    }
    

}
export const removeStorage = (keyName) => {
    storage.remove({
        key: keyName
    })
}