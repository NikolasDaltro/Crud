import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name:'',
    price: null
  }

constructor(private ProductService: ProductService, 
  private router: Router  ){}

ngOnInit(): void{

}

creatProduct(): void {
  this.ProductService.create(this.product).subscribe(() => {
    this.ProductService.showMessage('Operação Executada com Sucesso!')
    this.router.navigate(['/products'])
  })

  
}

cancel(): void {
 this.router.navigate(['/products'])
}

}
