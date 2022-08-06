import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { InternshipsComponent } from './internships/internships.component';
import { InfosComponent } from './infos/infos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MissionComponent } from './mission/mission.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    InternshipsComponent,
    InfosComponent,
    ContactsComponent,
    MissionComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
