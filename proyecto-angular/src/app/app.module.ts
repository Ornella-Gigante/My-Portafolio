import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {  provideHttpClient } from '@angular/common/http'; // Usa provideHttpClient
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ProjectsComponent,
    CurriculumComponent,
    ContactoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

    
  ],
  providers: [
    provideHttpClient() // Configuración correcta para HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
