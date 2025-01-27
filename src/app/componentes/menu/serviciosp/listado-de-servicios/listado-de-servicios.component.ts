import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { ListadoDeServiciosDataSource } from './listado-de-servicios-datasource';
import { FirestoreService } from '../../../../servicios/firestore.service';
import { Serviciosp } from '../../../../shared/modelos/serviciosp';

@Component({
  selector: 'app-listado-de-servicios',
  templateUrl: './listado-de-servicios.component.html',
  styleUrls: ['./listado-de-servicios.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class ListadoDeServiciosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  //dataSource = new ListadoDeServiciosDataSource();
  dataSource = new MatTableDataSource();

  constructor(private afs: FirestoreService) {

  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'horas', 'precioPorHora'];

  ngAfterViewInit(): void {
    this.afs.getCollection('serviciosp').subscribe((resp) => {
        console.log(resp);
    if (resp && resp.length > 0) {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.data = resp;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      } else {
        console.error('Los datos recibidos están vacíos o son inválidos');
      }

      //this.table.dataSource = this.dataSource;
    });
  }
}
