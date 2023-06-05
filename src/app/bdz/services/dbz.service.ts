import {Injectable} from "@angular/core";
import {Character} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9999
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }];

  //FORMA 1: con desestruccturación (no se recomienda en este caso por si el objeto tuviera muchas propiedades)
  addCharacter2({name, power}: Character):void {
    const newCharacter : Character = {
      id: uuid(),
      name,
      power
    };

    this.characters.push(newCharacter);
  }

  //FORMA 2: la mejor forma
  addCharacter(character: Character):void {
    const newCharacter : Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id: number):void {
  //   this.characters.splice(id, 1);
  // }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
