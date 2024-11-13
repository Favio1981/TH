import { SectoresService } from './../../core/services/sectores.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-sectores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sectores.component.html',
  styleUrl: './sectores.component.css'
})
export class SectoresComponent implements OnInit {

  sector: any[] = [];
  selectedSectorId: number | null = null;
  newSectorName = '';
  errorMessage: string = '';





  constructor(private Service: SectoresService) { }



  ngOnInit(): void {
    //this.Service.getSectores().subscribe
    this.Service.getSectores().subscribe(
      (data) => {
        this.sector = data;
      },
      (error) => {
        console.error('Error al obtener las sectores cargados:', error);
      }
    );

  }




  sectores = [{ nombre: 'Sector 1' }, { nombre: 'Sector 2' }]; // Lista de sectores inicial


  addSector(): void {
    if (this.newSectorName.trim()) {
      const newSector = { nombre: this.newSectorName.trim() };

      this.Service.addSector(newSector).subscribe({
        next: (response: string) => {
          // Si la API responde correctamente
          this.sectores.push(newSector);
          this.newSectorName = '';
         // Muestra un mensaje de éxito con SweetAlert
         Swal.fire({
          icon: 'success',
          title: 'Sector agregado',
          text: 'El sector ha sido agregado exitosamente.',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          // Vacía el campo de texto después de cerrar el SweetAlert
          this.newSectorName = '';
        });
      },
      error: (err: any) => {
        if (err.status === 422) {
          this.errorMessage = 'Este sector ya existe. Por favor, ingrese otro nombre.';
        } else {
          this.errorMessage = 'Ocurrió un error al agregar el sector. Intenta nuevamente.';
        }
        console.error('Error al agregar el sector:', err);


        // Muestra un mensaje de error con SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.errorMessage,
          confirmButtonText: 'Aceptar'
        }).then(() => {
          // Vacía el campo de texto después de cerrar el SweetAlert
          this.newSectorName = '';
        });
      },
    });
    }


  }


  updateSector(): void {
    if (this.selectedSectorId && this.newSectorName.trim()) {
      const updatedSector = { nombre: this.newSectorName.trim() };
      this.Service.updateSector(this.selectedSectorId, updatedSector).subscribe({
        next: () => {
          Swal.fire('Éxito', 'Sector actualizado exitosamente', 'success');
          this.newSectorName = '';
          this.ngOnInit(); // Recarga los sectores
        },
        error: (err) => {
          console.error('Error al actualizar el sector:', err);
          Swal.fire('Error', 'No se pudo actualizar el sector', 'error');
        }
      });
    } else {
      Swal.fire('Advertencia', 'Selecciona un sector y proporciona un nuevo nombre', 'warning');
    }
  }





  deleteSector(): void {
    if (this.selectedSectorId) {console.log('selectedSectorId')
      this.Service.deleteSector(this.selectedSectorId).subscribe({
        next: () => {
          Swal.fire('Éxito', 'Sector eliminado exitosamente', 'success');
          this.ngOnInit(); // Recarga los sectores
        },
        error: (err) => {
          console.error('Error al eliminar el sector:', err);
          Swal.fire('Error', 'No se pudo eliminar el sector', 'error');
        }
      });
    } else {
      Swal.fire('Advertencia', 'Selecciona un sector para eliminar', 'warning');
    }
  }
}










