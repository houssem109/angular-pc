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


  constructor(public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    let isloggedin: string;
    let loggedUser : string;
    // if isloggedin is null so we set to  false
    
    isloggedin = localStorage.getItem('isloggedIn')?? 'false' ;
    // and this to empty
    loggedUser = localStorage.getItem('loggedUser')??'';

    if (isloggedin != "true" || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout() {
    this.authService.logout();
  }
}
