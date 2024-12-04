
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router

interface CatBreed {
  id: string;
  name: string;
  imageUrl?: string;
  temperament: string;
  description: string;
}

@Component({
  selector: 'app-cats-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cats-gallery.component.html',
  styleUrl: './cats-gallery.component.scss'
})
export class CatsGalleryComponent implements OnInit {
  breeds: CatBreed[] = [];
  searchTerm = signal('');

  constructor(private http: HttpClient, private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.fetchCatBreeds();
  }

  fetchCatBreeds(): void {
    this.http.get<CatBreed[]>('https://api.thecatapi.com/v1/breeds')
      .subscribe((breedsData: CatBreed[]) => {
        this.breeds = breedsData;
        // After fetching the breed data, get the image for each breed
        this.breeds.forEach(breed => {
          this.fetchBreedImage(breed.id);  // Fetch image for each breed
        });
      });
  }

  fetchBreedImage(breedId: string): void {
    // Fetch image using the breed's ID (could use search or breed-specific filters)
    this.http.get<{ url: string }[]>(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .subscribe((imageData: { url: string }[]) => {
        if (imageData && imageData.length > 0) {
          // Add the image URL to the breed data
          const breed = this.breeds.find(b => b.id === breedId);
          if (breed) {
            breed.imageUrl = imageData[0].url;  // Set the image URL for this breed
          }
        }
      });
  }

  viewBreedDetail(breedId: string): void {
    this.router.navigate(['/breed-detail', breedId]); // Navigate to the breed detail page
  }
}
