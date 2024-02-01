import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
