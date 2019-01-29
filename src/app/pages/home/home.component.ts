import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colors: any[] = [
    {name: "Noir", code: "#000000"},
    {name: "Bleu foncé", code: "#00002A"},
    {name: "Vert foncé", code: "#002A00"},
    {name: "Bleu aqua", code: "#002A2A"},
    {name: "Rouge foncé", code: "#2A0000"},
    {name: "Violet foncé", code: "#2A002A"},
    {name: "Or", code: "#2A2A00"},
    {name: "Gris", code: "#2A2A2A"},
    {name: "Gris foncé", code: "#151515"},
    {name: "Bleu", code: "#15153F"},
    {name: "Aqua", code: "#153F3F"},
    {name: "Noir", code: "#3F3F3F"},
    {name: "Rouge", code: "#3F1515"},
    {name: "Violet clair", code: "#3F153F"},
    {name: "Jaune", code: "#3F3F15"},
    {name: "Blanc", code: "#3F3F3F"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
