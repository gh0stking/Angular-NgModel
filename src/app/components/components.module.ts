import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyInputText } from './mInputText';
import { MySelect } from './mSelect';
import { MyRadioButton } from './mRadioButton';
import { MyCheckBox } from './mCheckBox';
import { MyTextArea } from './mTextArea';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        MyInputText,
        MySelect,
        MyRadioButton,
        MyCheckBox,
        MyTextArea,
    ],
    exports: [
        MyInputText,
        MySelect,
        MyRadioButton,
        MyCheckBox,
        MyTextArea
    ]
})
export class MyComponentsModule { }