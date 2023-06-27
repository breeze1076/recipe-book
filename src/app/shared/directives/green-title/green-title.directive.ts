import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[greenTitle]',
})
export class GreenTitleDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.color = 'green';
  }
}
