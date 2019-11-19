
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {
    primaryPageSecondListComponentContainer,
    primaryPageSecondListImage1ComponentContainer,
    primaryPageSecondListImage2ComponentContainer,
    primaryPageSecondListText1ComponentContainer,
    primaryPageSecondListText2ComponentContainer,
    primaryPageSecondListText1ComponentStyle,
    primaryPageSecondListText2ComponentStyle,
    primaryPageSecondListMarginTopComponentStyle
} from './../../styles/primaryPage';
import { Avatar } from 'react-native-elements';

const PrimarySecondElementComponent = ({title1, title2, type1, type2, margin}) => {
    return (
                    <View style={[primaryPageSecondListComponentContainer.style, margin ? primaryPageSecondListMarginTopComponentStyle.style : null]}>
                        <View style={primaryPageSecondListImage1ComponentContainer.style}>
                            <Avatar
                                rounded
                                size="medium"
                                source={type1==='route' ?
                                    require('./../../library/image/route.png')
                                    :
                                    type1==='beach' ?
                                        require('./../../library/image/beach.png')
                                        :
                                    require('./../../library/image/cityscape.png')
                                }
                            />
                        </View>
                        <View style={primaryPageSecondListText1ComponentContainer.style}>
                            <Text style = {primaryPageSecondListText1ComponentStyle.style}>{title1}
                            </Text>
                        </View>
                        <View style={primaryPageSecondListImage2ComponentContainer.style}>
                            <Avatar
                                rounded
                                size="medium"
                                source={type2==='stopwatch' ?
                                    require('./../../library/image/stopwatch.png')
                                    :
                                    type2==='sky' ?
                                        require('./../../library/image/sky.png')
                                        :
                                        require('./../../library/image/cityscape.png')
                                }
                            />
                        </View>
                        <View style={primaryPageSecondListText2ComponentContainer.style}>
                            <Text style={primaryPageSecondListText2ComponentStyle.style}>{title2}
                            </Text>
                        </View>
                    </View>

    );
};


export default PrimarySecondElementComponent;
