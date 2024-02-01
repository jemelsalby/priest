import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { InstituteListComponent } from './institutions/institute-list/institute-list.component';
import { ViewInstituteComponent } from './institutions/view-institute/view-institute.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeBodyComponent },
  { path: 'login', component: LoginComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "notifi", component: NotificationsComponent },
  {
    path: 'schools',
    component: InstitutionsComponent,
    children: [
      { path: '', component: InstituteListComponent },
      { path: ':id', component: ViewInstituteComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent }, // should always be the last item of routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
