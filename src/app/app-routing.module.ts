import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { UserInitialPageComponent } from './user-initial-page/user-initial-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdministratorPageComponent
  },
  {
    path: 'user',
    component: UserInitialPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
