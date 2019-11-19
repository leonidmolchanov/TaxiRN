
import React from 'react';
import {
    View,
    Text, TouchableOpacity,
} from 'react-native';

import {
    HeaderComponentContainer,
    HeaderComponentLeftIconContainer,
    HeaderComponentTitleContainer,
    HeaderComponentTitleTextStyle
} from './../../styles/header';
import PrimaryMenuIconSvg from "../svg/primaryMenuIcon";

const Header = ({title, setLanguageModal}) => {
    return (
                    <View style={HeaderComponentContainer.style}>
                        <TouchableOpacity style={HeaderComponentLeftIconContainer.style}
                        onPress={()=>{setLanguageModal(true)}}>
                          <PrimaryMenuIconSvg />
                        </TouchableOpacity>
                        <View style={HeaderComponentTitleContainer.style}>
                            <Text style={HeaderComponentTitleTextStyle.style}>{title}
                            </Text>
                        </View>
                    </View>

    );
};


export default Header;
