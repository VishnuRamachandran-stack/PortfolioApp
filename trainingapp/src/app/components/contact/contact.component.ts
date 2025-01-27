import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillservicesService } from '../../services/skillservices.service';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
//import { detailUser } from '/interfaces/detailUser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ownName: string = 'Vishnu'
  ownPhone: string = '9745357856'
  ownEmail: string = 'vishnualiasvichu@gmail.com'
  newUser: any = { name: '', phone_number: '', email: '', message: '' }; // For new skill input
  postDetails: any[] = []; // Store the fetched skills
  error: string = '';  // Error message
  successMessage: string = '';  // Success message

  _skillService: SkillservicesService;

  private _http: HttpClient;



  constructor(skillServiceREF: SkillservicesService, httpRef: HttpClient) {
    this._skillService = skillServiceREF;
    this._http = httpRef;
  }

  sendEmailNotify(name: string, email: string, message: string) {
    console.log(name);
    console.log("saa");
    console.log(email);
    let apiEmailNotifyUrl = "https://vishfnapp.azurewebsites.net/api/HttpTriggerEmail?name=" + name + "&email=" + email + "&message=" + message;
    this._http.get(apiEmailNotifyUrl).subscribe(res => {
      console.log(res);
      console.log("Your request has been submitted successfully!");
    });
  }



  addSkill(formName: any): void {

    this.newUser.name = formName.value.name,
      this.newUser.email = formName.value.email,
      this.newUser.message = formName.value.message


    this._skillService.addPostDetails(this.newUser).subscribe(
      (response) => {
        this.successMessage = 'Skill added successfully!';

        this.postDetails.push(response);  // Add the new skill to the postDetails array
        if (response) {
          this.sendEmailNotify(this.newUser.name, this.newUser.email, this.newUser.message)
        }
        this.newUser = { name: '', phone_number: '', email: '', message: '' };  // Reset the form

      },
      (error) => {
        this.error = 'Failed to add user. Please try again later.';
        console.error('Error adding user:', error);
      }
    );
  }

}
