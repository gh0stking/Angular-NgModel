import { Component, Optional, Inject, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ElementBase } from '../form/form';
import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

@Component({
    selector: 'm-inputText',
    template: `
        <input 
            type="{{type}}" 
            [(ngModel)]='val' 
            [id]='identifier' 
            (input)="onInput($event)"
            [style.width]='width+"px"' />
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MyInputText,
        multi: true,
    }],
})
export class MyInputText extends ElementBase<string>{
    @ViewChild(NgModel) model: NgModel;
    @Input() type: string = 'text';
    @Input() width: number;
    @Output() input: EventEmitter<any> = new EventEmitter();

    public identifier = `m-input-${identifier++}`;

    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);// ValueAccessor base
    }

    onInput(event) {
        this.input.emit(event);
    }
}

let identifier = 0; 