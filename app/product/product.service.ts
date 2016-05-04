import {Injectable} from 'angular2/core';

export class Product {
    name: string;
    id : number;
}

@Injectable()
export class ProductService {
    //constructor(private _product:Product){}

    product: Product = {"name" : "Pepsi", "id" : 2 };

    getProduct(){

         return  this.product;
    }

}