import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
 {path:'about', component:AboutComponent},
  {path:'getintouch', component:GetintouchComponent},
  {path: 'header', component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
