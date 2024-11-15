import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'console',pathMatch:'full'},
  {path:'security',loadChildren:()=>import('./modules/security/security.module').then(m=>m.SecurityModule)},
  {path:'console',loadChildren:()=>import('./modules/console/console.module').then(m=>m.ConsoleModule)},
];
