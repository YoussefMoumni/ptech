import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { InternshipsComponent } from './internships/internships.component';
<<<<<<< HEAD
import { ServicesComponent } from './services/services.component';
import { MissionComponent } from './mission/mission.component';
import { NewsComponent } from './news/news.component';
=======
import { LoginComponent } from './login/login.component';
import { MissionComponent } from './mission/mission.component';
>>>>>>> 6c69d7a77f534e6b2e073b74b3606a9b6f178ca2

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'interships',
    component: InternshipsComponent,
  },
  {
    path: 'infos',
    component: InfosComponent,
  },
  {
    path: 'mission',
    component: MissionComponent,
  },
  {
    path: 'Contacts',
    component: ContactsComponent,
  },
  {
<<<<<<< HEAD
    path: ' mission',
    component:  MissionComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },

=======
    path: 'login',
    component: LoginComponent,
  },
>>>>>>> 6c69d7a77f534e6b2e073b74b3606a9b6f178ca2
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
