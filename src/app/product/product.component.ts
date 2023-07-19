import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product', // Selector del componente
  templateUrl: './product.component.html', // Ruta de la plantilla HTML asociada al componente
  styleUrls: ['./product.component.css'] // Rutas de los archivos de estilo CSS asociados al componente
})
export class ProductComponent {
  @Input() product: any; // Propiedad de entrada del componente
}