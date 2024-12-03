import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CatBreed {
  id: string;
  name: string;
  imageUrl?: string;
  temperament: string;
  description: string;
  origin: string;
}

@Component({
  selector: 'app-cat-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit {
  breed: CatBreed | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const breedId = this.route.snapshot.paramMap.get('id');
    if (breedId) {
      this.fetchBreedDetail(breedId);
    }
  }

  fetchBreedDetail(breedId: string): void {
    this.http.get<CatBreed>(`https://api.thecatapi.com/v1/breeds/${breedId}`)
      .subscribe(breedData => {
        this.breed = breedData;
        this.fetchBreedImage(breedData.id);
      });
  }

  fetchBreedImage(breedId: string): void {
    this.http.get<{ url: string }[]>(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .subscribe((imageData: { url: string }[]) => {
        if (imageData && imageData.length > 0) {
          if (this.breed) {
            this.breed.imageUrl = imageData[0].url;  // Set the image URL for this breed
          }
        }
      });
  }
}
