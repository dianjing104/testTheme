import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CdkDragDropConnectedSortingExample } from "../../drag/drag.component";


@NgModule({
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent],
    imports: [WelcomeRoutingModule, MatSlideToggleModule, CdkDragDropConnectedSortingExample]
})
export class WelcomeModule { }
