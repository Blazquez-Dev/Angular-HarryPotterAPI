import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { SpellService } from '../../services/spell.service';
import { SpellItemComponent } from '../spell-item/spell-item.component';

@Component({
  selector: 'app-spell-list',
  standalone: true,
  imports: [AsyncPipe, NgbPagination, SpellItemComponent],
  templateUrl: './spell-list.component.html',
})
export class SpellListComponent {
  private service = inject(SpellService);
  readonly pageSize = 24;
  page = 1;
  private page$ = new BehaviorSubject<number>(1);

  data$ = this.page$.pipe(
    switchMap((p) => this.service.getSpells(p, this.pageSize)),
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
