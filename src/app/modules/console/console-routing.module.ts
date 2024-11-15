import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'',loadComponent:()=>import('./dashboard-context/dashboard-context.component').then(c=>c.DashboardContextComponent),children:[
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'dashboard',loadComponent:()=>import('./dashboard/dashboard.component').then(c=>c.DashboardComponent)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
