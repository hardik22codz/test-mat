import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signUp',
    loadChildren: () => import('./sign-up/sign-up.module').then((m) => m.SignUpModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome-page/welcome.module').then((m) => m.WelcomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
