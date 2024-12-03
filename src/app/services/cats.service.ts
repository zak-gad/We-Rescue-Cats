import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  http = inject(HttpClient)

  getCatsFromApi(){
    const url = `https://api.thecatapi.com/v1/breeds`
    return this.http.get(url)
  }
}
