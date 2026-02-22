import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Command {
  id: number;
  command: string;
  explaination: string;
}

export interface Post {
  id: number;
  headline: string;
  text: string;
  author: string;
}

export interface Meme {
  id: number;
  url: string;
  alttext: string;
  addtext: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl:string = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getMemes(): Observable<Meme[]> {
    return this.http.get<Meme[]>(`${this.apiUrl}/memes`);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`)
  }

  getCommands(): Observable<Command[]> {
    return this.http.get<Command[]>(`${this.apiUrl}/commands`)
  }
}
