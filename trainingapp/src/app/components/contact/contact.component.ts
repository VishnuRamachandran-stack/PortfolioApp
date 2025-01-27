import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillservicesService } from '../../services/skillservices.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
name:string = 'Vishnu'
phone:string='9745357856'
email:string='vishnualiasvichu@gmail.com'
newSkill: any = { title: '', body: '', userId: '' }; // For new skill input
postDetails: any[] = []; // Store the fetched skills
error: string = '';  // Error message
successMessage: string = '';  // Success message

_skillService : SkillservicesService ;


constructor(skillServiceREF:SkillservicesService){
  this._skillService = skillServiceREF;
 }

addSkill(): void {
  this._skillService.addPostDetails(this.newSkill).subscribe(
    (response) => {
      this.successMessage = 'Skill added successfully!';

      this.postDetails.push(response);  // Add the new skill to the postDetails array
      this.newSkill = { title: '', body: '', userId: '' };  // Reset the form
    },
    (error) => {
      this.error = 'Failed to add skill. Please try again later.';
      console.error('Error adding skill:', error);
    }
  );
}

}
