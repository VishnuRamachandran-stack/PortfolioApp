import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { WorkexperienceComponent } from './components/workexperience/workexperience.component';
import { HobbiesandacheivementsComponent } from './components/hobbiesandacheivements/hobbiesandacheivements.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'aboutme',component:AboutmeComponent},
    {path:'workexperience',component:WorkexperienceComponent},
    {path:'hobbiesandacheivements',component:HobbiesandacheivementsComponent},
    {path:'contact',component:ContactComponent},



];
