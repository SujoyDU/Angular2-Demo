import {Injectable} from 'angular2/core';
import {Http,Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
export interface Character{
    id: number;
    name: string;
    side: string;
}


@Injectable()
export class CharacterService {
  constructor(private _http: Http) { }

  getData() {
    return this._http.get('/app/character/characters.json').map((response: Response) => response.json());


  }

  getCharacter(id: number) {
    return this.getData()
      .map(characters => characters.find(character => character.id == id));
  }
}

//export class CharacterService{
//
//    constructor(private _http:Http){}
//
//    getData(){
//       return this._http.get('app/character/characters.json')
//            .map((response:Response) => <Character[]>response.json().data);
//
//    }
//    getCharacterById(id: number){
//
//    }
//
//}
