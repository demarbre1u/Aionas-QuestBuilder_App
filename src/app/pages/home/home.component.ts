import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colors: any[] = [
    {name: "Noir", code: "black"},
    {name: "Rouge", code: "red"},
    {name: "Bleu", code: "blue"},
    {name: "Vert", code: "lightgreen"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
