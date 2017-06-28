import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { EmpComponent } from './components/emp.component'
import { MainpageComponent } from './components/mainpage.component'
import { routing } from './app.routing'

@NgModule({
    imports: [BrowserModule,HttpModule, FormsModule, routing],
    declarations:[AppComponent, EmpComponent, MainpageComponent],
    bootstrap:[AppComponent]
})

export class AppModule{}