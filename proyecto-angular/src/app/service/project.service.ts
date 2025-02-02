// github.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  public readonly username = 'Ornella-Gigante'; // Tu nombre de usuario correcto
  private readonly apiUrl = `https://api.github.com/users/${this.username}/repos`;
  
  constructor(private http: HttpClient) {}

  getRepositories(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    });

    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
