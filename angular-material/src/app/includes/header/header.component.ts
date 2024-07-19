import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authListenerSubs!: Subscription;
  isLoggedIn = false;
  constructor(private auth: AuthService, private cookieService: CookieService, private router: Router) { }
  ngOnInit() {
    this.authListenerSubs = this.auth.getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated
      console.log("isLoggedIn", this.isLoggedIn);
      this.router.navigate(['/welcome'])
      
    });
    if (this.cookieService.get('emailFormControl') && this.cookieService.get('passwordFormControl')) {
      this.isLoggedIn = true;
      this.router.navigate(['/welcome'])
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['/login'])
    }
  }

  login() {
    this.router.navigate(['/login'])
  }

  signUp(){
    this.logout();
  }

  logout() {
    this.cookieService.delete('emailFormControl');
    this.cookieService.delete('passwordFormControl');
    window.localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

}
