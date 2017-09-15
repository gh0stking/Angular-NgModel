import { Component, ViewChild, Optional, Inject, Input } from '@angular/core';
import { ElementBase } from '../form/form';

import {
    NgModel,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'm-checkbox',
    template: `
        <input 
            type="checkbox" 
            [(ngModel)]='val' 
            [checked]='true' 
            [id]='identifier' />
        <label for='{{identifier}}'>{{label}}</label>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MyCheckBox,
        multi: true
    }]
})
export class MyCheckBox extends ElementBase<boolean>{
    @ViewChild(NgModel) model: NgModel;
    @Input() label: string;
    public identifier = `m-checkbox-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}

let identifier = 0;  