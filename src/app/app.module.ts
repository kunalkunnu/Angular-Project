import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { headerComponent } from './components/header/header.component';
import { sectionComponent } from './components/section/section.component';



@NgModule({
  declarations: [
    AppComponent,
    sidebarComponent,
    headerComponent,
    sectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
