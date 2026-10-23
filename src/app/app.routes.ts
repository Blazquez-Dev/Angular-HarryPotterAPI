import { Routes } from '@angular/router';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { SpellListComponent } from './spells/spell-list/spell-list.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:slug', component: CharacterDetailComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:slug', component: BookDetailComponent },
  { path: 'spells', component: SpellListComponent },
  { path: 'spells/:slug', component: SpellDetailComponent },
  { path: '**', redirectTo: 'characters' },
];
