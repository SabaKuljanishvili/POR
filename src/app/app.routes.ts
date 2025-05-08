import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', redirectTo: "main", pathMatch: "full"  }, 
    {path: 'main', component: MainComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent },



    {path: "", redirectTo: "main", pathMatch: "full"},
   
    {
       path: "main",
       title: "Main",
       loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
    },
    {
        path: "project",
        title: "Project",
        loadComponent: () => import('./project/project.component').then(m => m.ProjectComponent)
    },
    {
        path: "contact",
        title: "Contact",
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
    }
];
