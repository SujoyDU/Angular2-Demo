import {Component} from 'angular2/core';
import {Character,CharacterService} from './character.service';
import {Input} from "angular2/core";
import {RouteParams,Router,ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector : 'single-character',
    templateUrl: 'app/character/character.component.html'

})

export class CharacterComponent{
    @Input()
    character: Character;

    constructor(
        private _characterService : CharacterService,
        private _routeParams : RouteParams,
        private _router : Router
    ){}

    ngOnInit() {
        if (!this.character) {
          let id = +this._routeParams.get('id');
          this._characterService.getCharacter(id)
              .subscribe(
                  character => {this.character = character},
                  err => {
                      console.log("error in CharacterComponents");
                      console.log(err);
                  },
                  () => {
                      console.log('completed')
                  }
              );
            //.subscribe(character => this._setEditCharacter(character));
        }
     }

    //private _gotoCharacters() {
    //let route = ['Characters', { id: this.character ? this.character.id : null }]
    //this._router.navigate(route);
    //}
    //
    //private _setEditCharacter(character: Character) {
    //if (character) {
    //  this.character = character;
    //} else {
    //  this._gotoCharacters();
    //}
  }

