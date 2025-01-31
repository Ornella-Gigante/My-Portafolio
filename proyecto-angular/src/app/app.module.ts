import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {  provideHttpClient } from '@angular/common/http'; // Usa provideHttpClient
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    provideHttpClient() // Configuración correcta para HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
