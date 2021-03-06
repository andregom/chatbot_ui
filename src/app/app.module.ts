import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { UserInitialPageComponent } from './user-initial-page/user-initial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorPageComponent,
    UserInitialPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
