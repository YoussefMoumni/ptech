import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { InternshipsComponent } from './internships/internships.component';
import { LoginComponent } from './login/login.component';
import { MissionComponent } from './mission/mission.component';
import { NewsComponent } from './news/news.component';

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
    path: 'mission',
    component: MissionComponent,
  },
  {
    path: 'Contacts',
    component: ContactsComponent,
  },
  {
    path: 'AboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
 {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
