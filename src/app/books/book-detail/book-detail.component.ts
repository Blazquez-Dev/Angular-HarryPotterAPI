import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { BookService } from '../../services/book.service';
import { PLACEHOLDER } from '../../utils/placeholder';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(BookService);
  readonly placeholder = PLACEHOLDER;

  book$ = this.route.paramMap.pipe(
    map((p) => p.get('slug')!),
    switchMap((slug) => this.service.getBook(slug)),
    map((res) => res.data.attributes)
  );
}
