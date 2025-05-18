import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { AboutUsersComponent } from './about/about-users/about-users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'about-users/:id', component: AboutUsersComponent},
 
  { path: 'contact', component: ContactComponent},
  { path: 'contact-details', component: ContactDetailsComponent},

  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: 'not-found' } 
];
