import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
constructor(private ProductService: ProductService, 
  private router: Router  ){}

ngOnInit(): void{
  this.router.navigate(['/products'])
}

creatProduct(): void {
  this.ProductService.showMessage('Operação Executada com Sucesso!')
}

cancel(): void {
 
}

}
