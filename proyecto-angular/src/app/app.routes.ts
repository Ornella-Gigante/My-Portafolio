import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [];

import { AboutmeComponent} from './components/aboutme/aboutme.component';

import { ProjectsComponent } from './components/projects/projects.component';

import { CreateComponent } from './components/create/create.component';

import { ContactComponent } from './components/contact/contact.component';


// Definir las rutas: 

const appRoutes: Routes = [

    {path: '', component: AboutmeComponent},
    {path: 'About Me', component: AboutmeComponent},
    {path: 'Projects', component: ProjectsComponent},
    {path: 'Create Project', component: CreateComponent},
    {path: 'Contact me', component: ContactComponent},
    {path: '**', component: AboutmeComponent},

];


