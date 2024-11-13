import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectoresComponent } from "../sectores/sectores.component";

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule,SectoresComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export default class TablesComponent {

}
