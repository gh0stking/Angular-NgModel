import { Component, ViewChild, Optional, Inject, Input } from '@angular/core';
import { ElementBase } from '../form/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'm-radio',
    template: `
        <input 
            type="radio" 
            [(ngModel)]='val' 
            [name]='name' 
            [value]="value" 
            [id]='identifier' />
        <label for='{{identifier}}'>{{label}}</label>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MyRadioButton,
        multi: true
    }]
})
export class MyRadioButton extends ElementBase<boolean>{
    @ViewChild(NgModel) model: NgModel;
    @Input() label: string;
    @Input() value: any = null;
    @Input() name: string;
    public identifier = `m-radio-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}

let identifier = 0;  