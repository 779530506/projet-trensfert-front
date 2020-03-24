import { GestionUserComponent } from './components/gestion-user/gestion-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AuthGuard } from './helper/auth.guard';


const routes: Routes = [
  {
    path: 'addUser', component: GestionUserComponent,
    canActivate: [AuthGuard]
  },
  {path: 'connexion', component: ConnexionComponent},
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  {
    path: 'list', component: ListeUserComponent,
    canActivate: [AuthGuard]
  },
  {
     path: 'view/:id', component: ViewUserComponent,
     canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id', component: GestionUserComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
