import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { SectoresComponent } from './business/sectores/sectores.component';
import {  SectoresComponent } from "../sectores/sectores.component";
//import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SectoresComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export default class ProfileComponent {

}
