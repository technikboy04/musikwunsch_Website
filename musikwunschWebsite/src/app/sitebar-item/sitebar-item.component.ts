import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitebar-item',
  templateUrl: './sitebar-item.component.html',
  styleUrls: ['./sitebar-item.component.scss']
})
export class SitebarItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() oldtitel: string ='';
  @Input() oldinterpret: string ='';
  @Input() oldimg: string ='';
  @Input() oldvotes: string ='';
}
