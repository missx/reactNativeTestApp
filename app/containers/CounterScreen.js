import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = () => {
    return {
        onIncrement: () => {
            dispatch(add());
        },
        onDecrement: () => {
            dispatch(reduce());                
        }
    }
}

export const CounterScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)