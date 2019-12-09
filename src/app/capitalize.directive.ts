import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[CapitalizeAndColorLink]'
})
export class CapitalizeDirective {
  constructor(private elem: ElementRef){
    this.elem.nativeElement.style.textTransform = "capitalize"
    this.elem.nativeElement.style.color = "red"
    
  }
}
