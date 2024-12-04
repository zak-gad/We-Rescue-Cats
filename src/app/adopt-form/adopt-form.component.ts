import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adopt-form',
  imports: [],
  templateUrl: './adopt-form.component.html',
  styleUrl: './adopt-form.component.scss'
})
export class AdoptFormComponent implements OnInit {
  breedId: string | null = null;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.breedId = params['breedId'];
    });
  }
}
