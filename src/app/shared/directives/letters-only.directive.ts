import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appLettersOnly]'
})
export class LettersOnlyDirective {
  @Output() valueChange = new EventEmitter()
  constructor(private _el: ElementRef) { }
  // pattren = /^(?:[a-zA-Z\u0020\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/;
  pattren = /^[\u0621-\u064A a-zA-Z]+$/;
 
  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return new RegExp(this.pattren).test(event.key);
  }
  
  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    var trimmedText: string = "";
    let pastedText = event.clipboardData.getData('text/plain');
    let regexp = new RegExp(this.pattren);
    for (let index = 0; index < pastedText.length; index++) {
      const element = pastedText[index];
      let test = regexp.test(element);
      if (test)
        trimmedText += element;
    }
    document.execCommand('insertText', false, trimmedText.trim());
  }
}
