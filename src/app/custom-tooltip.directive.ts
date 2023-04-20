import { Directive, ElementRef, HostListener, Renderer2, ViewChild,ContentChild } from '@angular/core';

@Directive({
  selector: '[appCustomTooltip]'
})
export class CustomTooltipDirective {

  constructor(private el: ElementRef,private renderer:Renderer2) {
   }
   position:any;
   
   ngAfterContentInit(){
    this.position=this.el.nativeElement.getBoundingClientRect();
   }

   @ContentChild('customTooltipContent')
   customTooltipContent!:ElementRef;

   @HostListener('mouseenter')mouseEnter(){
    this.renderer.setStyle(this.customTooltipContent.nativeElement,"visibility","visible")
   }

   @HostListener('mouseleave')mouseLeave(){
    this.renderer.setStyle(this.customTooltipContent.nativeElement,"visibility","hiden")
   }


}
