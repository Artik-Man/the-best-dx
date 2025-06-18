import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Film } from './film.interface';

@Component({
  selector: 'app-film',
  imports: [],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmComponent {
  film = input.required<Film>();
 }
