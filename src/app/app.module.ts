import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InternshipsComponent } from './internships/internships.component';
import { InfosComponent } from './infos/infos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MissionComponent } from './mission/mission.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternshipsComponent,
    InfosComponent,
    ContactsComponent,
    MissionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
