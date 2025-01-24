import { Routes } from '@angular/router';
import { DetalleComponent } from './componentes/menu/articulos/detalle/detalle.component';
import { ListadoComponent } from './componentes/menu/articulos/listado/listado.component';
import { FormArticuloComponent } from './componentes/menu/articulos/form-articulo/form-articulo.component';
import { FormularioDetalleComponent } from './componentes/menu/serviciosp/formulario-detalle/formulario-detalle.component';
import { ListadoDeServiciosComponent } from './componentes/menu/serviciosp/listado-de-servicios/listado-de-servicios.component';

export const routes: Routes = [
  {path: "", component: ListadoComponent},
  {path: "detalle/:id", component: DetalleComponent},
  {path: "form", component: FormArticuloComponent},
  {path: "form/:id", component: FormArticuloComponent},
  {path: 'lista-servicios', component: ListadoDeServiciosComponent},
  {path: 'new-servicio', component: FormularioDetalleComponent},
  {path: 'edit-servicio/:id', component: FormularioDetalleComponent},
  {path: "listado", redirectTo: "/", pathMatch: "full"},
  {path: "**", redirectTo: "/", pathMatch: "full"}
];
