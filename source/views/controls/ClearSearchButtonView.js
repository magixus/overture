import { Class } from '../../core/Core';
import ButtonView from './ButtonView';

const ClearSearchButtonView = Class({

    Extends: ButtonView,

    className: 'v-ClearSearchButton',
    positioning: 'absolute',
    shortcut: 'Ctrl-/',
});

export default ClearSearchButtonView;
