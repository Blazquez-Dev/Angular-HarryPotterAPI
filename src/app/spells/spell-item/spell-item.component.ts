import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PLACEHOLDER } from '../../utils/placeholder';

@Component({
  selector: 'app-spell-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './spell-item.component.html',
})
export class SpellItemComponent {
  @Input({ required: true }) slug!: string;
  @Input({ required: true }) name!: string;
  @Input() image: string | null = null;
  readonly placeholder = PLACEHOLDER;
}
