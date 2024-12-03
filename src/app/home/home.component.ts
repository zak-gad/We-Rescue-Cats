import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CatsGalleryComponent } from '../components/cats-gallery/cats-gallery.component';
import { AdoptCatComponent } from '../components/adopt-cat/adopt-cat.component';
import { ContactComponent } from "../contact/contact.component";
@Component({
  selector: 'app-home',
  imports: [MatTabsModule, CatsGalleryComponent, AdoptCatComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
