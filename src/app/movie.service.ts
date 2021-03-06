import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '5a4e4e3552e253164aaca579b85b26a0';
  public movie_id;

  getMovies(): any {
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=${'en'}`;
    return this.http.get(moviesUrl);
  }

  getDetails(movie_id): any {
    let moviesUrl = `${this.url}${movie_id}?api_key=${this.apiKey}&language=${'en-US'}`;
    return this.http.get(moviesUrl);
  }

  getSearch(query): any {
    let moviesUrl = `https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=${this.apiKey}&query=${query}`
    return this.http.get(moviesUrl);
  }

  checkFav(movieId) {
    let favurl = `http://localhost:3004/favourites/${movieId}`;
    return this.http.get(favurl);
  }
}
