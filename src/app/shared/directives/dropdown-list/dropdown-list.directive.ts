import { HostBinding } from '@angular/core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownList]',
})
export class DropdownListDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }
}
