import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './modulos/formulario/formulario.component';
import { ContactComponent } from './modulos/contact/contact.component';
import { LoginComponent } from './modulos/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
