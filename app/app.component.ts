import {Component} from 'angular2/core';
import {ProductComponent} from './product/product.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductService} from "./product/product.service";
//import {CharacterListComponent} from "./character/character-list.component";
import {CharactersComponent} from "./character/characters.component";
import {CharacterService} from "./character/character.service";
import {JstreeDemoComponent} from "./jstreeDemo/jstreeDemo.component";


@Component({
    selector: 'product-management',
    template: `
    <h1>Product Mangement App</h1>
    <h2>Routers</h2>

    <a [routerLink]="['Dashboard']" href="">Dashboard</a>
    <a [routerLink]="['Product']" href="">Product</a>
    <a [routerLink]="['Shop']" href="">Shop</a>
    <a [routerLink]="['Characters']" href="">Character</a>
    <a [routerLink]="['JstreeDemo']" href="">Jstree</a>

    <router-outlet></router-outlet>
    `,
    directives : [ProductComponent,ROUTER_DIRECTIVES,DashboardComponent,ShopComponent,JstreeDemoComponent],

    providers: [ROUTER_PROVIDERS]

    //providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  { path: '/product', name: 'Product', component: ProductComponent},
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
  { path: '/shop', name: 'Shop', component: ShopComponent},
  { path: '/characters/...', name: 'Characters', component: CharactersComponent},
  { path: '/jstreeDemo', name: 'JstreeDemo', component : JstreeDemoComponent}

  ])

export class AppComponent { }