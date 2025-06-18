import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FilmComponent } from './film/film.component';
import { Film } from './film/film.interface';

@Component({
  selector: 'app-film-slider',
  imports: [FilmComponent],
  templateUrl: './film-slider.component.html',
  styleUrl: './film-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmSliderComponent {
  films = signal<Film[]>([
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      year: 2010,
      genre: 'Science Fiction',
      rating: 8.8,
      image:
        'https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg',
      description:
        "A skilled thief is given a chance at redemption if he can successfully perform inception, the planting of an idea into a target's subconscious.",
      id: '1',
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    },
  ]);
}
