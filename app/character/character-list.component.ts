import {Component,OnInit} from 'angular2/core';
import {CharacterService,Character} from "./character.service";
import {Observable} from 'rxjs/Rx'
import {HTTP_PROVIDERS} from "angular2/http";
import {Input} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'character-part',
    templateUrl:'app/character/character-list.component.html',
    directives : [ROUTER_DIRECTIVES]


})

export class CharacterListComponent implements OnInit{

    //characters : Observable<Character[]>;
    @Input()
    characters : Character[];
    //public characters;

    constructor(private _characterService: CharacterService){}

    ngOnInit(){
        this.getCharacterList();
        //this.characters =[];
        //this.characters = this._characterService.getData();
        //this._characterService.getData().subscribe(
        //    (c: Character[])=> {this.characters= c},
        //    err => {
        //        console.log("error Occured");
        //        console.log(err);
        //    },
        //    () => {
        //        console.log("Completed")
        //    }
        //);
    }
    getCharacterList(){
        //this.characters = this._characterService.getData();

        this._characterService.getData().subscribe(
            c => {this.characters= c},
            err => {
                console.log("error Occured");
                console.log(err);
            },
            () => {
                console.log("Completed");
            }
        );
    }



}