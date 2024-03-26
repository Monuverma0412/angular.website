import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  followUser: any
  signUpWithEmail: any
  users: any
  searchQuery: string = '';
  constructor() { }

  search(): void {
    console.log('Searching for:', this.searchQuery);
  }
}
