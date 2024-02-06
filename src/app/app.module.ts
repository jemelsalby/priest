import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ViewInstituteComponent } from './institutions/view-institute/view-institute.component';
import { InstituteListComponent } from './institutions/institute-list/institute-list.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CreateSchoolComponent } from './institutions/create-school/create-school.component';
import { AuthInterceptorService } from './login/auth-interceptor.service';
import { environment } from 'src/environments/environment';
import { CreateNotificationComponent } from './notifications/create-notification/create-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBodyComponent,
    InstitutionsComponent,    
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    PagenotfoundComponent,
    ViewInstituteComponent,
    InstituteListComponent,
    BackButtonComponent,
    NotificationsComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    CreateSchoolComponent,
    CreateNotificationComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
