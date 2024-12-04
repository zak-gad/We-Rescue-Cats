import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CatsGalleryComponent } from '../components/cats-gallery/cats-gallery.component';
import { AdoptCatComponent } from '../components/adopt-cat/adopt-cat.component';

import { AdoptFormComponent } from "../adopt-form/adopt-form.component";
@Component({
  selector: 'app-home',
  imports: [MatTabsModule, CatsGalleryComponent, AdoptCatComponent,  AdoptFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
