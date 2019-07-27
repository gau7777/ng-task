import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { TaskFormComponent } from './task-form/task-form.component';
import {PanelModule} from 'primeng/panel';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { TaskService } from './services/Task-service';
import { LocalStorageService } from './services/local_storage.service';
import {CalendarModule} from 'primeng/calendar';
import {GrowlModule} from 'primeng/growl';
import {CardModule} from 'primeng/card';

import {DragDropModule} from 'primeng/dragdrop';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskFormComponent
/*     OrderByPipe */
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    PanelModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    CardModule,
    GrowlModule,
    DragDropModule,
    OrderModule
  ],
  providers: [TaskService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
