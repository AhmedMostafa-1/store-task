import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Output } from '@angular/core';


@Directive({
  selector: 'input[numbersOnly]'
})
// Desc >> To Accept enter number only in text
// Usage >>  <input type="number" class="form-control" placeholder="ادخل المبلغ" maxlength="2" FloatOnly />
export class NumbersOnlyDirective {

  @HostBinding('autocomplete') public autocomplete

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.autocomplete = 'off'
  }

  @HostListener('keypress', ['$event']) public disableKeys(e: any) {
    this.document.all ? e.keyCode : e.keyCode
    return e.keyCode == 8 || (e.keyCode >= 48 && e.keyCode <= 57)
  }
}

