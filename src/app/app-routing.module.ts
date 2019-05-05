import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ResumenComponent } from './components/pages/resumen/resumen.component';

const routes: Routes = [
	{ path:'home',component: HomeComponent },
	{ path:'contacto',component: ContactComponent },
	{ path:'resumen',component: ResumenComponent },
	{ path:'**', pathMatch: 'full',redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {'useHash':true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
