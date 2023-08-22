import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlight]'
})
export class RenderHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private rederer: Renderer2) { }

  ngOnInit(): void {
    this.rederer.setStyle(this.element.nativeElement, 'background-color', '#ffc107')
  }

  @HostListener('click') onclick(event: Event) {
    this.rederer.setStyle(this.element.nativeElement, 'display', 'none')
  }
}
