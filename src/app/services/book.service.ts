import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PotterListResponse, PotterSingleResponse } from '../models/common.model';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.potterdb.com/v1/books';

  getBooks(page = 1, pageSize = 24): Observable<PotterListResponse<Book>> {
    const params = new HttpParams().set('page[number]', page).set('page[size]', pageSize);
    return this.http.get<PotterListResponse<Book>>(this.baseUrl, { params });
  }

  getBook(slug: string): Observable<PotterSingleResponse<Book>> {
    return this.http.get<PotterSingleResponse<Book>>(`${this.baseUrl}/${slug}`);
  }
}
