import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gast-body',
  templateUrl: './gast-body.component.html',
  styleUrls: ['./gast-body.component.scss']

})
export class GastBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  cards:any[] = [
  {
    title: 'Card Title 1',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
  },
  {
    title: 'Card Title 2',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Card Title 3',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },
  {
    title: 'Card Title 4',
    description: 'Some quick example text to build on the card title and make up the bulk of the card content',
    buttonText: 'Button',
    img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
  },

];
}
