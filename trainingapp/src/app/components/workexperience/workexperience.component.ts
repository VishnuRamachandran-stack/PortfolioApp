import { Component, OnInit } from '@angular/core';
import { SkillservicesService } from '../../services/skillservices.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-workexperience',
  imports: [NgFor],
  templateUrl: './workexperience.component.html',
  styleUrl: './workexperience.component.css'
})
export class WorkexperienceComponent implements OnInit{

_skillService : SkillservicesService ;
postDetails: any[] = [];

constructor(skillServiceREF:SkillservicesService){
  this._skillService = skillServiceREF;
 }

 ngOnInit(): void {
  this._skillService.getPostDetails();
  this.postDetails = this._skillService.postDetails;  // Assign data to component's property

 }

}
