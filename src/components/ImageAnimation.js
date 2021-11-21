import React, { useRef } from 'react';
import { Animated } from 'react-native';

const ImageAnimation = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View style={{
            ...props.style,
            opacity: fadeAnim
        }}>
            {props.children}
        </Animated.View>
    )
}

export default ImageAnimation;