import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route} from '@angular/router';
import { routes,appRoutesProviders } from '../app.routes';

import { AppComponent } from '../app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateComponent } from './create/create.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';



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
    routes, 
  
  ],
  providers: [appRoutesProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}