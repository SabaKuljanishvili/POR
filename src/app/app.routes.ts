import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: '', redirectTo: "main", pathMatch: "full"  }, 
    {path: 'main', component: MainComponent},
    // {path: 'cancel', component: CancelComponent},
    // {path: 'ticket', component: TicketComponent},
    // {path: 'about', component: AboutComponent},
    {path: '**', component: ErrorComponent },



    {path: "", redirectTo: "main", pathMatch: "full"},
   
    {
       path: "main",
       title: "Main",
       loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
    },
//     {
//       path: "cancel",
//       title: "Tickets cancellation",
//       loadComponent: () => import('./cancel/cancel.component').then(m => m.CancelComponent)
//    },
//    {
//       path: "ticket",
//       title: "Tickets",
//       loadComponent: () => import('./ticket/ticket.component').then(m => m.TicketComponent)
//    },
//     {
//         path: "about",
//         title: "About",
//         loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
//      },
];
