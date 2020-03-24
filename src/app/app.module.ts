import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { InterceptorService } from './helper/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GestionUserComponent } from './components/gestion-user/gestion-user.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidebarComponent,
    GestionUserComponent,
    ConnexionComponent,
    ViewUserComponent,
    ListeUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
