
import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {
    primaryPageFirstListComponentContainer,
    primaryPageFirstListImageComponentContainer,
    primaryPageFirstListTextComponentContainer,
    primaryPageFirstListTextComponentStyle
} from './../../styles/primaryPage';
import { Avatar } from 'react-native-elements';

const PrimaryFirstElementComponent = ({title, type}) => {
    return (
                    <View style={primaryPageFirstListComponentContainer.style}>
                        <View style={primaryPageFirstListImageComponentContainer.style}>
                            <Avatar
                                rounded
                                size="medium"
                                source={type==='cityscape' ?
                                    require('./../../library/image/cityscape.png')
                                    :
                                    type==='taxi' ?
                                        require('./../../library/image/icon.png')
                                        :
                                    require('./../../library/image/cityscape.png')
                                }
                            />
                        </View>
                        <View style={primaryPageFirstListTextComponentContainer.style}>
                            <Text style={primaryPageFirstListTextComponentStyle.style}>{title}
                            </Text>
                        </View>
                    </View>

    );
};


export default PrimaryFirstElementComponent;
