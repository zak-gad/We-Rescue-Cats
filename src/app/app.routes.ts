import { Routes } from '@angular/router';
import { CatsGalleryComponent } from './components/cats-gallery/cats-gallery.component';
import { CatDetailComponent } from './components/cat-detail/cat-detail.component';
import { ContactComponent } from './contact/contact.component';

 

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
    path: 'adopt-form',
    loadComponent: () => { 
        return import('./adopt-form/adopt-form.component').then(
            (m) => m.AdoptFormComponent
        )

    }
  },

{ path: 'breed-detail/:id', component: CatDetailComponent},
{ path: 'contact', component: ContactComponent }
];
