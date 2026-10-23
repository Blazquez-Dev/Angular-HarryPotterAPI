import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SpellService } from '../../services/spell.service';
import { PLACEHOLDER } from '../../utils/placeholder';

@Component({
  selector: 'app-spell-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './spell-detail.component.html',
})
export class SpellDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(SpellService);
  readonly placeholder = PLACEHOLDER;

  spell$ = this.route.paramMap.pipe(
    map((p) => p.get('slug')!),
    switchMap((slug) => this.service.getSpell(slug)),
    map((res) => res.data.attributes)
  );
}
