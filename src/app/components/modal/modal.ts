import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Output() a = new EventEmitter<void> ();
  
  closeModal() {
    this.a.emit();
  }
}
