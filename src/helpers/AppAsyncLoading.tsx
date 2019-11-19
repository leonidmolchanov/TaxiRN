import EStyleSheet from 'react-native-extended-stylesheet';
import {rem} from './../styles/remStyles'

// Функция для установки ремов для разметки
const buildRems = async () => {
    EStyleSheet.build({
        '@media ios': {
            $rem: rem,
            $remJsx: rem,
        },
        '@media android': {
            $rem: rem,
            $remJsx: rem,
        },
    });

}



export {buildRems}
