import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-film-slider',
  imports: [],
  templateUrl: './film-slider.component.html',
  styleUrl: './film-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmSliderComponent { }
