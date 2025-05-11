import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule, CardModule],
    templateUrl: `./stats-widget.html`
})
export class StatsWidget {}
