import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[fontColor]',
})
export class FontColorDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.color') fontColor: string = '';

  ngOnInit(): void {
    this.fontColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseOver(event: Event) {
    this.fontColor = this.highlightColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'font-style',
    //   'italic'
    // );
  }

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.fontColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'font-style',
    //   'normal'
    // );
  }
}
