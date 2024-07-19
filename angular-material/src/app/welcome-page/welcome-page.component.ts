import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../shared/profile';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  providers: [DatePipe]
})
export class WelcomePageComponent implements OnInit {
  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
  allProfile: Profile[] = [];
  dataSource: any = [];

  authSubscription!: Subscription

  displayedColumns: string[] = ['address', 'firstName', 'lastName', 'email', 'date'];
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.authSubscription = this.auth.get().subscribe((data) => {
      this.allProfile = data;
      this.dataSource = this.allProfile;
    });
  }

}
