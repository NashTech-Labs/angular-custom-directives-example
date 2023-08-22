import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  constructor(private element: ElementRef, private rederer: Renderer2) { }

  @HostListener('mouseenter') onmouseover(event: Event){
    this.rederer.setStyle(this.element.nativeElement, 'background-color','MediumSeaGreen')
  }

  @HostListener('mouseleave') onmousleave(event: Event){
    this.rederer.setStyle(this.element.nativeElement, 'background-color','grey')
  }

}
