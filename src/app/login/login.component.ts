import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  user = new User();
  err: number =0;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }


  onLoggedin() {
    /* console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur = 1;
  } */
      this.authService.login(this.user).subscribe({
        next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
        },
        error: (err: any) => {
        this.err = 1;
        }
        });

        /*  ma3adich bech testa3mil version hethi
      this.authService.login(this.user).subscribe((data)=> {
        let jwToken = data.headers.get('Authorization')!;//! pour les null
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
        },(erreur)=>{ this.err = 1;
        }); */
        
  }
}
