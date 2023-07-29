import { Component } from '@angular/core';

@Component({
  selector: 'app-second-challenge',
  templateUrl: './second-challenge.component.html',
  styleUrls: ['./second-challenge.component.scss']
})
export class SecondChallengeComponent {
  count: string[] = [];
  show: boolean = false;

  getColor(){
    return this.count.length > 4 ? 'blue' : 'transparent'
  }

}
