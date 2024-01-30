import React, { useEffect } from "react";
import { Text, View } from "react-native";
import BackgroundService from 'react-native-background-actions';
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

const veryIntensiveTask = async (taskDataArguments) => {
    // Example of an infinite loop task
    const { delay } = taskDataArguments;
    await new Promise( async (resolve) => {
        for (let i = 0; BackgroundService.isRunning(); i++) {
            console.log(i);
            await sleep(delay);
        }
    });
};

const options = {
    taskName: 'Example',
    taskTitle: 'ExampleTask title',
    taskDesc: 'ExampleTask description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'http://localhost:8081/', // See Deep Linking for more info
    parameters: {
        delay: 1000,
    },
};

const RunBackground =  () => {

    useEffect(()=>{
        ru()
    },[]);


    const ru = async () => {
        await BackgroundService.start(veryIntensiveTask, options);
await BackgroundService.updateNotification({taskDesc: 'New ExampleTask description'}); // Only Android, iOS will ignore this call
    }

    return(
        <View>
            <Text>
                helow
            </Text>
        </View>
    )

}

export default RunBackground;