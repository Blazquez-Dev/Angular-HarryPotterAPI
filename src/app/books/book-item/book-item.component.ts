import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PLACEHOLDER } from '../../utils/placeholder';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-item.component.html',
})
export class BookItemComponent {
  @Input({ required: true }) slug!: string;
  @Input({ required: true }) name!: string;
  @Input() image: string | null = null;
  readonly placeholder = PLACEHOLDER;
}
