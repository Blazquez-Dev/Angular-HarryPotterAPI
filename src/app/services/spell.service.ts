import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PotterListResponse, PotterSingleResponse } from '../models/common.model';
import { Spell } from '../models/spell.model';

@Injectable({ providedIn: 'root' })
export class SpellService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.potterdb.com/v1/spells';

  getSpells(page = 1, pageSize = 24): Observable<PotterListResponse<Spell>> {
    const params = new HttpParams().set('page[number]', page).set('page[size]', pageSize);
    return this.http.get<PotterListResponse<Spell>>(this.baseUrl, { params });
  }

  getSpell(slug: string): Observable<PotterSingleResponse<Spell>> {
    return this.http.get<PotterSingleResponse<Spell>>(`${this.baseUrl}/${slug}`);
  }
}
