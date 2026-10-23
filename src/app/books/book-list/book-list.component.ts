import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { BookService } from '../../services/book.service';
import { BookItemComponent } from '../book-item/book-item.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AsyncPipe, NgbPagination, BookItemComponent],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {
  private service = inject(BookService);
  readonly pageSize = 24;
  page = 1;
  private page$ = new BehaviorSubject<number>(1);

  data$ = this.page$.pipe(
    switchMap((p) => this.service.getBooks(p, this.pageSize)),
    map((res) => ({
      count: res.meta.pagination.records,
      items: res.data.map((r) => ({
        slug: r.attributes.slug,
        name: r.attributes.title ?? '',
        image: r.attributes.cover ?? null,
      })),
    }))
  );

  onPageChange(p: number) {
    this.page = p;
    this.page$.next(p);
  }
}
