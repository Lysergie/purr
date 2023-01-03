import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurrComponent } from './purr/purr.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'purr',
    pathMatch: 'full'
  },
  {
    path: 'purr',
    component: PurrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
