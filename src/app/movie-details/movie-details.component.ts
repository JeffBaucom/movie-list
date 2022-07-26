import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

// I've made some assumptions about how to handle missing or incomplete data based on the FIGMA mockup,

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  // Iterate through ratings array and calculate average
  getRating() {
    let sum = 0;
    for (let rating of this.movie.Ratings) {
      let calculatedValue;
      let ratingNumerator = 0;
      let ratingDenominator = 100;
      if (rating.value.includes('/')) {
        // out of 10 or 100
        const split = rating.value.split('/') as unknown[];
        ratingNumerator = split[0] as number;
        ratingDenominator = split[1] as number;

      } else {
        // Percentage
        const split = rating.value.split('%') as unknown[];
        ratingNumerator = split[0] as number;
        ratingDenominator = 100;
      }
      calculatedValue = ratingNumerator / ratingDenominator;
      sum = sum + calculatedValue;
    }
    return ((sum / this.movie.Ratings.length) * 10).toFixed(1);
  }

  getRuntime() {
    // Check if 
    const runtime = this.movie.runtime;
    const split = runtime.split(' ');
    let totalMinutes = Number(split[0]);
    if (Number.isNaN(totalMinutes)) {
      return "N/A"
    }
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${hours}h ${minutes}m`;
  }

  getPosterURL() {
    // Check for valid URL, if invalid return placeholder image
    try {
      let url = new URL(this.movie.poster);
    } catch {
      return 'https://via.placeholder.com/145x215.png'
    }
    return this.movie.poster;
  }

  // Catch valid URL but invalid responses
  handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://via.placeholder.com/145x215.png';
  }
}
