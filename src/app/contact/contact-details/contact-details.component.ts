import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  imports: [],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
contactEmail!: string;

constructor(private route: ActivatedRoute) { }
ngOnInit(){
this.route.queryParams.subscribe(params => {
  console.log(params['email']);
  this.contactEmail = params['email'];
});
}


}
