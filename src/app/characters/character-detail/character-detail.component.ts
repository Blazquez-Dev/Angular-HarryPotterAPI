import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CharacterService } from '../../services/character.service';
import { PLACEHOLDER } from '../../utils/placeholder';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './character-detail.component.html',
})
export class CharacterDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(CharacterService);
  readonly placeholder = PLACEHOLDER;

  character$ = this.route.paramMap.pipe(
    map((p) => p.get('slug')!),
    switchMap((slug) => this.service.getCharacter(slug)),
    map((res) => res.data.attributes)
  );
}
