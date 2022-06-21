import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { RegisterComponent } from './register/register.component';
import { TalkComponent } from './talk/talk.component';
import { UserInitialPageComponent } from './user-initial-page/user-initial-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin', pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdministratorPageComponent
  },
  {
    path: 'user',
    component: UserInitialPageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'talk',
    component: TalkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
