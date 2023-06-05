import {Injectable} from "@angular/core";
import {Character} from "../interfaces/character.interface";


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Goku',
    power: 9999
  }, {
    name: 'Vegeta',
    power: 9000
  }];

  onNewCharacter(character: Character):void {
    this.characters.push(character);
  }

  onDeleteCharacter(id: number):void {
    this.characters.splice(id, 1);
  }
}