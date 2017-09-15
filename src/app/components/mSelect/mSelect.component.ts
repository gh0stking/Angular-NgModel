import {
    Component,
    Optional,
    Inject,
    Input,
    ViewChild,
    Output,
    EventEmitter,
} from '@angular/core';

import {
    NgModel,
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    NG_ASYNC_VALIDATORS,
} from '@angular/forms';

import { ElementBase } from '../form/form';

@Component({
    selector: 'm-select',
    template: `
        <select
            [style.width]='width+"px"'
            [(ngModel)]="val"
            [id]="identifier">
          <ng-content></ng-content>
        </select>
    `,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: MySelect,
        multi: true,
    }],
})
export class MySelect extends ElementBase<string> {
    @ViewChild(NgModel) model: NgModel;
    @Input() public placeholder: string;
    @Input() width: number;

    public identifier = `m-select-${identifier++}`;
    constructor(
        @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
        @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    ) {
        super(validators, asyncValidators);
    }
}

let identifier = 0;  