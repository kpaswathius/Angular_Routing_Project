import { Component } from '@angular/core';
import { AboutUsersComponent } from './about-users/about-users.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [AboutUsersComponent,
    RouterOutlet
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  users: { id: number; name: string; age: number; }[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 25
    },
     {
      id: 2,
      name: 'John Doe',
      age: 25
    },
     {
      id: 3,
      name: 'John Doe',
      age: 25
    }, {
      id: 4,
      name: 'John Doe',
      age: 25
    }
  ];
  
  constructor(private router: Router) { }
goToContact(){
   this.router.navigate(['/contact']);
}

goToUsers(){
    this.router.navigate(['/about-users/' + this.users[0].id]);
}
}
