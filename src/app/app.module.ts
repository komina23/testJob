import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import localeRu from '@angular/common/locales/ru';

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './authorization/login-page/login-page.component';
import { HeaderComponent } from './modules/header/header.component';
import { NavigateComponent } from './modules/navigate/navigate.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HtmlSanitizerPipe } from './pipes/html-safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTaskComponent } from './task-list/create-task/create-task.component';
import { ViewTaskComponent } from './task-list/view-task/view-task.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    NavigateComponent,
    TaskListComponent,
    CreateTaskComponent,
    ErrorPageComponent,
    HtmlSanitizerPipe,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatDialogModule, 
    MatInputModule, 
    MatRadioModule,
    MatPaginatorModule
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
