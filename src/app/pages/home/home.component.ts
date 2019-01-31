import { Component, OnInit, ViewChild, ElementRef, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colors: any[] = [
    {code: '&0', name: "Noir", class: "color-0"},
    {code: '&1', name: "Bleu foncé", class: "color-1"},
    {code: '&2', name: "Vert foncé", class: "color-2"},
    {code: '&3', name: "Bleu aqua", class: "color-3"},
    {code: '&4', name: "Rouge foncé", class: "color-4"},
    {code: '&5', name: "Violet foncé", class: "color-5"},
    {code: '&6', name: "Or", class: "color-6"},
    {code: '&7', name: "Gris", class: "color-7"},
    {code: '&8', name: "Gris foncé", class: "color-8"},
    {code: '&9', name: "Bleu", class: "color-9"},
    {code: '&a', name: "Aqua", class: "color-a"},
    {code: '&b', name: "Noir", class: "color-b"},
    {code: '&c', name: "Rouge", class: "color-c"},
    {code: '&d', name: "Violet clair", class: "color-d"},
    {code: '&e', name: "Jaune", class: "color-e"},
    {code: '&f', name: "Blanc", class: "color-f"},
  ]

  @ViewChild('textStart') textStart: ElementRef
  htmlStart: string = ''

  @ViewChild('textEnd') textEnd: ElementRef
  htmlEnd: string = ''

  questName: string = ''

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() { }

  // Sets up the colored start text in the preview block
  setStartPreview() {  
    let texte = this.sanitizer.sanitize(SecurityContext.NONE, this.textStart.nativeElement.value)

    this.htmlStart = this.textToHtml(texte) 
  }

  // Sets up the colored end text in the preview block
  setEndPreview() {  
    let texte = this.sanitizer.sanitize(SecurityContext.NONE, this.textEnd.nativeElement.value)

    this.htmlEnd = this.textToHtml(texte) 
  }

  // Replaces &* code in a given text with <span> elements to aapply the right color to the text 
  private textToHtml(texte) {
    let regexColorCode = /(&[a-f0-9]).*/

    let res = texte.match(regexColorCode)
    while(res !== null) 
    {
      let colorClass = this.colors.filter(elem => elem.code === res[1]).length === 0 ? 'color-0' : this.colors.filter(elem => elem.code === res[1])[0].class

      texte = texte.replace(res[1], `<span class="color ${ colorClass }">`)
      texte += '</span>'

      res = texte.match(regexColorCode)
    }

    return texte
  }
}
