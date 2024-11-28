import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { 'ngSkipHydration': '' }
})
export class AppComponent implements OnInit {
  title = 'Pc';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    /* if (this.isBrowser()) {
      let isloggedin: string = localStorage.getItem('isloggedIn') ?? 'false';
      let loggedUser: string = localStorage.getItem('loggedUser') ?? '';

      if (isloggedin !== 'true' || !loggedUser) {
        this.router.navigate(['/login']);
      } else {
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
      }
    } */
      this.authService.loadToken();
      if (this.authService.getToken()==null || this.authService.isTokenExpired())
      this.router.navigate(['/login']);
  }

  onLogout() {
    this.authService.logout();
  }

  // Utility method to check if the code is running in the browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
