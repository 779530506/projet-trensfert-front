import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageComponent } from './page/page.component';
import { GestionUserComponent } from './components/gestion-user/gestion-user.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    PageComponent,
    GestionUserComponent,
    ConnexionComponent,
    ListUserComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
