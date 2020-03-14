import { ListeUserComponent } from './page/liste-user/liste-user.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageComponent } from './page/page.component';
import { ConnexionComponent } from './components/connexion/connexion.component';


const routes: Routes = [
  {path: 'addUser', component: PageComponent},
  {path: 'connexion', component: ConnexionComponent},
  { path: '', redirectTo: '/connexion', pathMatch: 'full' },
  { path: 'list', component: ListeUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
