import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {

    console.log("Directiva llamada");

    //el.nativeElement.style.backgroundColor = "skyblue";
  
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){

    this.resaltar(this.nuevoColor || 'skyblue')

  }

  @HostListener('mouseleave') mouseFuera(){

    this.resaltar(null)

  }

  private resaltar(color:string){

    this.el.nativeElement.style.backgroundColor = color

  }

}
