import React from 'react';
import { View, Text, Button } from 'react-native';
import { PropTypes } from 'prop-types';

export default class Counter extends React.Component {

    render () {

        const { value, onIncrement, onDecrement } = this.props;

        return (
            <View>
                <Text>The value is {value}</Text>
                <Button onPress={onIncrement}
                        title="Add" />
                <Button onPress={onDecrement}
                        title="Decrease" />
            </View>
        )
    }
    
}

const propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}