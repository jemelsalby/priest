import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';

const routes: Routes = [
  {
    path:"", component: HomeBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
