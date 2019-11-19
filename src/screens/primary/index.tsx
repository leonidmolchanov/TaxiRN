
import React, {Fragment, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Modal,
    TouchableHighlight, TouchableOpacity
} from 'react-native';
import Strings from './../../localized'
import {
    primaryPageScrollViewStyle,
    primaryPageBottomTextStyle
} from './../../styles/primaryPage';
import PrimaryFirstElementComponent from './../../components/primary/PrimaryFirstElement.component'
import PrimarySecondElementComponent from './../../components/primary/PrimarySecondElement.component'
import Header from './../../components/header'
import PrimaryMenuIconSvg from "../../components/svg/primaryMenuIcon";
import { CheckBox } from 'react-native-elements'

const PrimaryScreen = () => {
    const [languageModal, setLanguageModal] = useState(false);

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Header title='Таксометр по Израилю' setLanguageModal={setLanguageModal} />
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={primaryPageScrollViewStyle.style}
                    >
<PrimaryFirstElementComponent title='Откуда...' type='cityscape' />
                    <PrimaryFirstElementComponent type='cityscape' title='Куда...' />
                    <PrimaryFirstElementComponent type='taxi' title='Такси 4 пассажира' />
<PrimarySecondElementComponent type1='route' type2='stopwatch' title1='Км в час' title2='Мин. в пути' margin={false} />
                    <PrimarySecondElementComponent type1='beach' type2='sky' title1='День' title2='Ночь' margin={true} />

                    <Text
                        style={primaryPageBottomTextStyle.style}>
                        {Strings.how}
                        *Водитель должен включить счетчик! Прейскуран предоставлен только для справки!</Text>
                </ScrollView>
            </SafeAreaView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={languageModal}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 300, backgroundColor:'#4e2', width:'70%', alignSelf:'center',shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 33.16,

                    elevation: 20,}}>
                    <View style={{width:'100%', height:30, backgroundColor:'#3a6', flexDirection:'row'}}>
                        <View style={{marginTop:-15}}>
                        <PrimaryMenuIconSvg />
                        </View>


                        <CheckBox
                            title='Click Here'
                            checked={true}
                        />
                        <Text>Настройки</Text>
                    </View>

                        <TouchableHighlight
                            onPress={() => {
                                setLanguageModal(false)
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
            </Modal>
        </Fragment>
    );
};


export default PrimaryScreen;
