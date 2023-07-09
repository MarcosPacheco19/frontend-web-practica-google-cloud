import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPapeleriaComponent } from './pages/gestion-papeleria/gestion-papeleria.component';

const routes: Routes = [
  {path: "", component: GestionPapeleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
