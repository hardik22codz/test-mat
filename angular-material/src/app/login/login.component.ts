import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profile: any;
  authListenerSubs!: Subscription;
  isLoggedIn = false;
  ngOnDestroy(): void {
    // this.authSubscription?.unsubscribe();
  }
  authSubscription!: Subscription
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
    let email = this.cookieService.get('emailFormControl');
    let password = this.cookieService.get('passwordFormControl');
    this.authListenerSubs = this.auth.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isLoggedIn = isAuthenticated
      });
    if (email !== "" && password !== "") {
      this.router.navigate(['/welcome']);
    }
    this.get();
  }

  get() {
    this.authSubscription = this.auth.get().subscribe((data) => {
      this.profile = data;
    });
  }
  login(f: NgForm) {
    if (f.invalid) {
      return;
    }

    let formValue = f.value;

    if (!formValue) {
      return;
    }

    if (this.profile[1]?.emailFormControl === formValue.emailFormControl && this.profile[1]?.passwordFormControl === formValue.passwordFormControl) {
      this.router.navigate(['/welcome']);

      this.authSubscription = this.auth.login(formValue.emailFormControl, formValue.passwordFormControl).subscribe({
        next: (data: any) => {
          if (data) {
            this.router.navigate(['/welcome']);
          } else {
            alert({
              // title: 'Login Failed',
              message: 'User Name or Password is incorrect',
              // timeout: 2000
            });
          }
        },
        error: (err: any) => {
        },
      });
      return true;
    } else if (!this.profile?.userName && !this.profile?.getPassword) {
      alert('no credentials found!!!')
      return false;
    }
    else {
      alert('Invalid credentials!!!')
      return false;
    }
  }

}
