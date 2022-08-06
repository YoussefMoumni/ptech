import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InternshipsComponent } from './internships/internships.component';
import { InfosComponent } from './infos/infos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MissionComponent } from './mission/mission.component';
<<<<<<< HEAD
import { NewsComponent } from './news/news.component';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> 6c69d7a77f534e6b2e073b74b3606a9b6f178ca2

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternshipsComponent,
    InfosComponent,
    ContactsComponent,
    MissionComponent,
<<<<<<< HEAD
    NewsComponent
=======
    LoginComponent
>>>>>>> 6c69d7a77f534e6b2e073b74b3606a9b6f178ca2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
