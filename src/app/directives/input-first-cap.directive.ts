import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputFirstCap]'
})
export class InputFirstCapDirective {

  constructor(private element: ElementRef) { }

  @HostListener('blur') onblur() {
    let value: string = this.element.nativeElement.value;
    this.element.nativeElement.value = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();;
  }
}
