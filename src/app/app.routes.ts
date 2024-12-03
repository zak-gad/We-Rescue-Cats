import { Routes } from '@angular/router';
import { CatsGalleryComponent } from './components/cats-gallery/cats-gallery.component';
import { CatDetailComponent } from './components/cat-detail/cat-detail.component';
 

export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        loadComponent: () => {
            return import('./home/home.component').then(
            (m) => m.HomeComponent  
            )
        },
    },
    {
        path: 'contact',
        loadComponent: () => {
            return import('./contact/contact.component').then(
            (m) => m.ContactComponent  
            )

    }
},
{
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
{ path: '', component: CatsGalleryComponent },
{ path: 'breed-detail/:id', component: CatDetailComponent}
];
