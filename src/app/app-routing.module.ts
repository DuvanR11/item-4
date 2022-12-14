import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: '',   redirectTo: '/projection', pathMatch: 'full' },
  { path: 'projection', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
