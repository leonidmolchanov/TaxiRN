import  EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from "react-native";
import React from "react";


const HeaderComponentContainer  = EStyleSheet.create({
    style:  {
        width:'100%',
        height:'6.9375rem',
        flexDirection:'row'
    }
});

const HeaderComponentLeftIconContainer  = EStyleSheet.create({
    style:  {
        width:'15%',
        justifyContent:'center',
        marginLeft:'0.9375rem'}
});

const HeaderComponentTitleContainer  = EStyleSheet.create({
    style: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});

const HeaderComponentTitleTextStyle  = EStyleSheet.create({
    style: {
fontWeight:'bold',
        fontSize:'1.2rem',


    }
});


export  {
    HeaderComponentContainer,
    HeaderComponentLeftIconContainer,
    HeaderComponentTitleContainer,
    HeaderComponentTitleTextStyle
}


