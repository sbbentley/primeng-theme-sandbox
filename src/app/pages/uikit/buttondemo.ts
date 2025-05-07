import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CardModule } from 'primeng/card';
import { SelectButton } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButton } from 'primeng/togglebutton';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
    selector: 'app-button-demo',
    standalone: true,
    imports: [ButtonModule, ButtonGroupModule, SplitButtonModule, SelectButton, ToggleButton, CommonModule, FormsModule,ToggleSwitch, CardModule],
    templateUrl: './button-demo.html'

})

export class ButtonDemo implements OnInit {
    items: MenuItem[] = [];

    loading = [false, false, false, false];

    toggleValue: boolean = false;

    switchValue: boolean = false;

    selectButtonValue: any = null;

    selectButtonValues: any = [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }];

    ngOnInit() {
        this.items = [{ label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' }, { separator: true }, { label: 'Setup', icon: 'pi pi-cog' }];
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }
}
