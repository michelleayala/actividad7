import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecetasComponent } from './componentes/recetas/recetas.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent },
  {path:'login', component:LoginComponent},
  {path:'recetas', component:RecetasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
