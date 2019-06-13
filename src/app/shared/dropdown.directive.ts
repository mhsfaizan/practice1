import { Directive, HostListener, HostBinding, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective implements OnInit{
    isShow = false;
    constructor(private el:ElementRef,private renderer:Renderer2 ){
    }
    ngOnInit(){
        
    }
    @HostListener('click') onclick(){
        this.isShow = !this.isShow;
        let sibling = this.renderer.nextSibling(this.el.nativeElement);
        if(this.isShow){
            this.renderer.addClass(sibling,"show");
        }else{
            this.renderer.removeClass(sibling,'show'); 
        }
    }
}