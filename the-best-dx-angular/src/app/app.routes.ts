import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./film-slider/film-slider.component').then(m => m.FilmSliderComponent),
    },
      {
        path: 'friends',
        loadComponent: () => import('./friends-list/friends-list.component').then(m => m.FriendsListComponent),
    },
    {path: '**', redirectTo: ''}
];
