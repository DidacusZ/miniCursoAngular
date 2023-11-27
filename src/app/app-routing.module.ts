import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';

const rutas : Routes = [  
  {path:'vista1',component:Vista1Component},
  {path:'vista2',component:Vista2Component},
  {path:'',redirectTo:'/vista1',pathMatch:'full'}
];//cuando el usuario valla a /vista ira al contenido del componente

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  
  exports:[RouterModule]
})
export class AppRoutingModule { }
