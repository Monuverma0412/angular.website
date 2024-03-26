import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { BootsrapComponent } from './bootsrap/bootsrap.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "first",component:FirstComponent},
  {path:"second",component:SecondComponent},
  {path:"third",component:ThirdComponent},
  {path:"bootsrap",component:BootsrapComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
