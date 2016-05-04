import {Component} from 'angular2/core';
//import {Shop} from './shop'


export class Shop {
    name : string;
    id : number;
}

@Component({
    selector : 'shop',
    template :`
        <div>
            <h1>Welcome to shop info</h1>
            <p>Shop name: {{shop.name}}</p>
            <p>Shop Id: {{shop.id}}</p>
        </div>
    `
})

export class ShopComponent{

     shop: Shop = {"name": "Almas", "id" : 10};

}
