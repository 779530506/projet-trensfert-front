import { GestionUserComponent } from './components/gestion-user/gestion-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
<<<<<<< HEAD
import { ListeUserComponent } from './page/liste-user/liste-user.component';
=======
import { ListeUserComponent } from './components/liste-user/liste-user.component';
>>>>>>> dev
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConnexionComponent } from './components/connexion/connexion.component';


const routes: Routes = [
  {path: 'addUser', component: GestionUserComponent},
  {path: 'connexion', component: ConnexionComponent},
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'list', component: ListeUserComponent},
  { path: 'view/:id', component: ViewUserComponent},
<<<<<<< HEAD
=======
  {path: 'edit/:id', component: GestionUserComponent},
>>>>>>> dev

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
