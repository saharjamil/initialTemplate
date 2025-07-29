import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone:false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  animations: [
    trigger('toggleSearch', [
      state('closed', style({
        width: '40px',
        // opacity: 0,
        overflow: 'hidden',
      })),
      state('open', style({
        width: '200px',
        // opacity: 1,
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})
export class SearchComponent {

  searchIsOpen: boolean = false;
  value: string = '';
  @Input() searchPlaceholder: string = 'جستجو...';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput', {static:true}) searchInput!: ElementRef;
  onSearchSelected(event:any) {
    event.preventDefault(); 
    if (this.searchIsOpen) {
      this.onSearch.emit(this.value)
    }
    else {
      this.searchIsOpen = true;
      this.searchInput.nativeElement.focus();
      setTimeout(() => {
      }, 300)
      return
    }
  }
}
