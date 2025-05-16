import { Component, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppFooter } from './app.footer';
import { LayoutService } from '../service/layout.service';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, AppFooter, MenubarModule],
    templateUrl: `./app.layout.html`
})
export class AppLayout {
    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;
    model: MenuItem[] = [];

    constructor(
        public layoutService: LayoutService,
        public renderer: Renderer2,
        public router: Router
    ) {
        
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/']
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    // {
                    //     label: 'Auth',
                    //     icon: 'pi pi-fw pi-user',
                    //     items: [
                    //         {
                    //             label: 'Login',
                    //             icon: 'pi pi-fw pi-sign-in',
                    //             routerLink: ['/auth/login']
                    //         },
                    //         {
                    //             label: 'Error',
                    //             icon: 'pi pi-fw pi-times-circle',
                    //             routerLink: ['/auth/error']
                    //         },
                    //         {
                    //             label: 'Access Denied',
                    //             icon: 'pi pi-fw pi-lock',
                    //             routerLink: ['/auth/access']
                    //         }
                    //     ]
                    // },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/pages/notfound']
                    // }
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'View Source',
                icon: 'pi pi-fw pi-github',
                url: 'https://github.com/primefaces/sakai-ng',
                target: '_blank'
            }
        ];
    }
}
