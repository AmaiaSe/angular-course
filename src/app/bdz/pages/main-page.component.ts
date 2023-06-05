import {Component} from "@angular/core";
import {Character} from "../interfaces/character.interface";


@Component({
  selector: 'app-bdz-main-page',
  templateUrl:'./main-page.component.html'
})
export class MainPageComponent {

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

  onNewCharacter(character: Character){
    console.log('Main Page');
    debugger;
    console.log(character);
  }

}
