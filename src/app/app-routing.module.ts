import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudProductoComponent } from './components/crud-producto/crud-producto.component';


const routes: Routes = [
  {path:"addProducto", component:CrudProductoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
