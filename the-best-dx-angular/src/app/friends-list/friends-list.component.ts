import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  imports: [],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendsListComponent { }
