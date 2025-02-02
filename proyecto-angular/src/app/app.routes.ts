import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import{CurriculumComponent} from './components/curriculum/curriculum.component'
import { ErrorComponent } from './components/error/error.component';




export const routes: Routes = [
    { path: '', component: AboutmeComponent },
    { path: 'about-me', component: AboutmeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'curriculum', component: CurriculumComponent},
    { path: 'contact', component: ContactoComponent },
    { path: '**', component: ErrorComponent},
   ];
   
export const routing = RouterModule.forRoot(routes);