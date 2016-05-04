import {Component,Input,OnInit,Output } from 'angular2/core'
import {ProductService} from './product.service'
import {Product} from "./product.service";


//export class Product {
//    name: string;
//    id : number;
//}


@Component({
    selector : 'product',
    template : `
        <div>
            <h1> Here are the products</h1>
            <p> Product Name : {{product.name}}</p>
            <p>Product Id : {{product.id}}</p>
        </div>

    `,
    providers: [ProductService]

})

export class ProductComponent implements OnInit{
    constructor(private _productService : ProductService){}
    @Input()
    product: Product;

    ngOnInit(){
        this.getProducts();
    }

    getProducts(){
        this.product = this._productService.getProduct();
    }
    //product : Product = {"name" : "Colgate", "id" : 8};

}