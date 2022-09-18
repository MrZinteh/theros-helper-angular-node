import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import {NavBarService} from "./shared/services/nav-bar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  selectedTab = "Name Generator";

  constructor(
    private navBarService: NavBarService,
    private authService: AuthService
  ) {
    this.navBarService.selectedTabSubject.subscribe({
      next: value => {
        this.selectedTab = value;
      }
    })
  }

  get isLoggedIn(): boolean { 
    return this.authService.isLoggedIn
  }
}
