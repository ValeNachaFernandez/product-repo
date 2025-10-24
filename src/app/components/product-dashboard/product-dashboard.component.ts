import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productos: Product[] = [];
  mostrarAlerta: boolean = false;
  productoABorrar: number | null = null;

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al cargar productos:', err)
    });
  }

  abrirModal(content: any) {
    this.mostrarAlerta = false;
    this.modalService.open(content, { centered: true, size: 'md'  });
  }

  onFalsoSubmit(form: any, modal: any) {
    if (form.valid) {
      this.mostrarAlerta = true;
      
      setTimeout(() => {
        modal.close();
        this.mostrarAlerta = false;
      }, 2000);
    }
  }

  abrirBorrar(id: number, content: any) {
    this.productoABorrar = id;
    this.modalService.open(content, { centered: true, size: 'md' });
  }

  confirmarBorrar(modal: any) {
    if (this.productoABorrar !== null) {
      this.productService.deleteProduct(this.productoABorrar).subscribe({
        next: () => {
          this.productos = this.productos.filter(p => p.id !== this.productoABorrar);
          this.productoABorrar = null;
          modal.close();
        },
        error: (err) => {
          console.error('Error al eliminar producto:', err);
          modal.close();
        }
      });
    }
  }
}