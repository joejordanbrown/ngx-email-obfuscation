import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[emailObfuscation]'
})
export class EmailObfuscation implements OnInit {

  activated = false;
  emailText: string;

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.activated) {
      this.activated = true;
      this.unobfuscate();
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.obfuscate();
  }

  obfuscate() {
    const nativeElement = this.element.nativeElement;
    const textElement = nativeElement.childNodes[0];
    this.emailText = textElement.nodeValue;

    this.renderer.removeChild(nativeElement, textElement);

    const span = this.renderer.createElement('span');
    this.renderer.appendChild(nativeElement, span);
    this.renderer.setProperty(span, 'style', 'unicode-bidi: bidi-override; direction: rtl;');
    const reverseText = this.renderer.createText(this.emailText.split('').reverse().join(''));
    this.renderer.appendChild(span, reverseText);
  }

  unobfuscate() {
    const nativeElement = this.element.nativeElement;
    const textElement = nativeElement.childNodes[0];

    this.renderer.removeChild(nativeElement, textElement);

    const anchor = this.renderer.createElement('a');
    this.renderer.appendChild(nativeElement, anchor);
    this.renderer.appendChild(anchor, this.renderer.createText(this.emailText));
    this.renderer.setProperty(anchor, 'href', 'mailto:' + this.emailText);
  }

}
