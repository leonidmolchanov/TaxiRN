import React from "react";
import Svg, {Path} from 'react-native-svg';
import {primaryMenuIconSvgProps} from './../../props/primaryMenu'



const PrimaryMenuIconSvg = () => {
    return (
        <Svg {...primaryMenuIconSvgProps}>
            <Path
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                x={0}
                y={0}
                fill={primaryMenuIconSvgProps.fill}
            />
        </Svg>
    )
};


export default PrimaryMenuIconSvg;
