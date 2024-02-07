import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';

import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { InstituteListComponent } from './institutions/institute-list/institute-list.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { ViewInstituteComponent } from './institutions/view-institute/view-institute.component';
import { AuthGuradService } from './login/auth-gurad.service';
import { CreateSchoolComponent } from './institutions/create-school/create-school.component';
import { AdminGuradService } from './login/admin-gurad.service';
import { CreateNotificationComponent } from './notifications/create-notification/create-notification.component';

const routes: Routes = [
  { path: '', component: HomeBodyComponent, canActivate: mapToCanActivate([AuthGuradService]) },
  { path: 'login', component: LoginComponent },
  { path: "aboutus", component: AboutusComponent, canActivate: mapToCanActivate([AuthGuradService])  },
  { path: "notification", component: NotificationsComponent, canActivate: mapToCanActivate([AuthGuradService]) },
  { path: 'create-notification', component: CreateNotificationComponent, canActivate: mapToCanActivate([AuthGuradService, AdminGuradService]), pathMatch: 'full' },
  {
    path: 'schools',
    component: InstitutionsComponent,
    canActivate:mapToCanActivate([AuthGuradService]) ,
    children: [
      { path: '', component: InstituteListComponent },
      { path: 'create', component: CreateSchoolComponent, pathMatch: 'full' , canActivate:mapToCanActivate([AdminGuradService])},
      { path: 'edit/:id', component: CreateSchoolComponent, canActivate: mapToCanActivate([AdminGuradService])},
      { path: ':id', component: ViewInstituteComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent}, // should always be the last item of routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
