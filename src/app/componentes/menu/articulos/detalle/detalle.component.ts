import { Component, inject } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../shared/material/material.module';
import { FirestoreService } from '../../../../servicios/firestore.service';
import { Articulo } from '../../../../shared/modelos/articulo';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MatCardModule, MaterialModule, RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  private dataService = inject(FirestoreService);
  router = inject(ActivatedRoute);

  id: string = '';
  articulo!: Articulo;


  ngOnInit() {
    this.id = this.router.snapshot.params["id"];
    console.log('El id es -> ', this.id);
    if (this.id) {
      this.dataService.getDocument(`articulos/${this.id}`).subscribe(res => {
        this.articulo = res;
        console.log(this.articulo);
      }  )
    }
  }
}
