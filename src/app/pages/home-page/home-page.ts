import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from '../../components/modal/modal';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}
  
  openModal(event: Event) {
    // Transformando o nome do button para titulo do modal
    const titleButton = event.target as HTMLElement;
    this.titleModal = titleButton.innerText;

    // Selecionando o arquvio de texto correspondente ao titulo do button 
    const arq = this.titleModal.toLowerCase() + '.txt';
    const dir = `assets/txt-message/${arq}`;
    this.http.get(dir, { responseType: 'text' }).subscribe({
      next: conteudo => {
        this.messageModal = conteudo;
        this.viewModal = true;
      },
      error: () => {
        this.messageModal = 'Erro ao carregar a mensagem.';
        this.viewModal = true;
      }
    });
  }

  closeModal() {
    this.viewModal = false;
  }

}
