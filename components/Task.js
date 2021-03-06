import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.roundedSquare}></View>
            </View>
            <Text style={styles.taskText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: 10,
        width: '95%'
    },
    itemLeft: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // flexWrap: 'wrap'
    },
    roundedSquare: {
        width: 15,
        height: 15,
        backgroundColor: '#88B8FF',
        opacity: 0.73,
        borderRadius: 5,
        marginRight: 10
    },
    taskText: {
        maxWidth: '80%',

    },
})

export default Task;