import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [];

import { AboutmeComponent} from './components/aboutme/aboutme.component';

import { ProjectsComponent } from './components/projects/projects.component';

import { CreateComponent } from './components/create/create.component';

import { ContactComponent } from './components/contact/contact.component';

import { ErrorComponent } from './components/error/error.component';


// Definir las rutas: 

const appRoutes: Routes = [

        { path: '', component: AboutmeComponent },
        { path: 'about-me', component: AboutmeComponent },
        { path: 'projects', component: ProjectsComponent },
        { path: 'create-project', component: CreateComponent },
        { path: 'contact-me', component: ContactComponent },
        { path: '**', component: ErrorComponent },
    ];
    


// Exportacion de rutas 

export const appRoutesProviders: any[] = [];


// Cargar configuracion de rutas en Angular


export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
