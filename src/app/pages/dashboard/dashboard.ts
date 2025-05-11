import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notifications-widget';
import { StatsWidget } from './components/stats-widget';
import { RecentSalesWidget } from './components/recentsales-widget';
import { BestSellingWidget } from './components/bestselling-widget';
import { RevenueStreamWidget } from './components/revenuestream-widget';

@Component({
    selector: 'app-dashboard',
    imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget],
    templateUrl: "./dashboard.html"
})
export class Dashboard {}
