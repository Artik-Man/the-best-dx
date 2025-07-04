import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'the-best-dx-angular';
}
