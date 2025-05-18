import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-users',
  imports: [],
  templateUrl: './about-users.component.html',
  styleUrl: './about-users.component.css'
})
export class AboutUsersComponent {
  id!: number;
  constructor(private route:ActivatedRoute) { }
 ngOnInit() {
this.route.params.subscribe(params => {
  console.log(params['id']);
  this.id = params['id'];
 });
 }
}
