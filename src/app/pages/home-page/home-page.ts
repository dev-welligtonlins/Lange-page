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
  titleModal = '';
  messageModal = '';


  openModal(event: Event) {
    const titleButton = event.target as HTMLElement;
    this.titleModal = titleButton.innerText;
    console.log(this.titleModal)
    this.viewModal = true;
  }

  closeModal() {
    this.viewModal = false;
  }

}
