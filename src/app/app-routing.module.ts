import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
/*import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';*/


const routes: Routes = [
  { path: 'login', component: LoginComponent }
  /*{ path: '**', pathMatch: 'full', component: PagenotfoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
