import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { Fieldset } from 'primeng/fieldset';
import { Panel } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-formlayout-demo',
    standalone: true,
    imports: [InputTextModule, FluidModule, ButtonModule, SelectModule, FormsModule, TextareaModule, Panel, CardModule],
    templateUrl: './form-layout.html'
})
export class FormLayoutDemo {
    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    dropdownItem = null;
}
