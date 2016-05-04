import {Component} from 'angular2/core'
import {RouteConfig} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";
import {CharacterListComponent} from "./character-list.component";
import {CharacterService} from "./character.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {CharacterComponent} from "./character.component";

@Component({
    selector: 'character-root',
    template: `
        <h1>Welcome to character parent</h1>
        <router-outlet></router-outlet>


    `,
    directives: [ROUTER_DIRECTIVES,CharacterListComponent],
    providers:[HTTP_PROVIDERS,CharacterService]

})

@RouteConfig([
    {path :'/', name:'Characters',component: CharacterListComponent,useAsDefault: true},
    {path: '/:id', name:'Character',component: CharacterComponent}

])
export class CharactersComponent{

}
