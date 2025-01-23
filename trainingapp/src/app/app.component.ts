import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { HobbiesandacheivementsComponent } from './components/hobbiesandacheivements/hobbiesandacheivements.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,HomeComponent,AboutmeComponent,WorkexperienceComponent,HobbiesandacheivementsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trainingapp';
}
