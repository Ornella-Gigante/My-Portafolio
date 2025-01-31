import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './error/error.component';




export const routes: Routes = [
    { path: '', component: AboutmeComponent },
    { path: 'about-me', component: AboutmeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'create', component: CreateComponent },
    { path: 'contact', component: ContactoComponent },
    { path: '**', component: ErrorComponent},
   ];
   
export const routing = RouterModule.forRoot(routes);