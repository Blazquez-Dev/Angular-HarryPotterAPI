import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { CharacterService } from '../../services/character.service';
import { CharacterItemComponent } from '../character-item/character-item.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [AsyncPipe, NgbPagination, CharacterItemComponent],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  private service = inject(CharacterService);
  readonly pageSize = 24;
  page = 1;
  private page$ = new BehaviorSubject<number>(1);

  data$ = this.page$.pipe(
    switchMap((p) => this.service.getCharacters(p, this.pageSize)),
    map((res) => ({
      count: res.meta.pagination.records,
      items: res.data.map((r) => ({
        slug: r.attributes.slug,
        name: r.attributes.name ?? '',
        image: r.attributes.image ?? null,
      })),
    }))
  );

  onPageChange(p: number) {
    this.page = p;
    this.page$.next(p);
  }
}
