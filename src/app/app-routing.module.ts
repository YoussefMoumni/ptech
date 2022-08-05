import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { InternshipsComponent } from './internships/internships.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: ServicesComponent
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
    path: 'Contacts',
    component: ContactsComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
