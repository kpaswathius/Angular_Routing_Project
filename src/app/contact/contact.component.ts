import { Component } from '@angular/core';
//import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ 
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 constructor(private router: Router) { }

 sendEmail(){
    this.router.navigate(['/contact-details'], { queryParams: { email: 'aaa@ttt.com'}, fragment: 'loading' });
  
 }
}
