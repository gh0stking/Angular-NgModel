import { Component, Optional, Inject, ViewChild, Input } from '@angular/core';
import { ElementBase } from '../form/form';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'm-textarea',
    template: `
        <textarea 
            [(ngModel)]='val' 
            [id]='identifier' 
            [rows]="rows"
            [cols]="cols">
        </textarea>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MyTextArea,
        multi: true,
    }],
})
export class MyTextArea extends ElementBase<string>{
    @ViewChild(NgModel) model: NgModel;
    @Input() rows: number = 5;
    @Input() cols: number = 30;
    public identifier = `m-textarea-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);// ValueAccessor base
    }
}

let identifier = 0; 