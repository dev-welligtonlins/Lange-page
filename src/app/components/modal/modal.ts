import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Input() title : string = '';
  @Input() message : string = '';
  @Output() cloModal = new EventEmitter<void> ();
  
  closeModal() {
    this.cloModal .emit();
  }
}
