import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  //TODO Add Movie Type
  movies?: Movie[] = [];

  constructor(private movieDataService: MovieDataService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieDataService.getMovies().subscribe(data => {
      this.movies = data as Movie[];
    })
  }

}
