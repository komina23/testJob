import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './authorization/login-page/login-page.component'
import { ErrorPageComponent } from './error-page/error-page.component'
import { TaskListComponent } from './task-list/task-list.component'
import { AuthGuard } from './authorization/guard/auth.guard'

const routes: Routes = [
  {path: '', redirectTo: "task-list", pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'task-list', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: "error", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
