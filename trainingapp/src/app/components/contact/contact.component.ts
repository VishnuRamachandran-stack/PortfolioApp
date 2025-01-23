import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
name:string = 'Vishnu'
phone:string='9745357856'
email:string='vishnualiasvichu@gmail.com'
}
