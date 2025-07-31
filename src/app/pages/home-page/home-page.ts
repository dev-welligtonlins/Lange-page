import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, Modal],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
  viewModal = false;

  openModal() {
    this.viewModal = true;
  }

  closeModal() {
    this.viewModal = false;
  }

}
