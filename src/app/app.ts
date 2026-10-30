import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {


  nome: string = 'Maria Silva';
  idade: number = 18;
  curso: string = 'Informática';
  email: string = 'maria@email.com';
  cidade: string = 'São Paulo';


  public restaurarDados(): void {
    this.nome = 'Maria Silva';
    this.idade = 18;
    this.curso = 'Informática';
    this.email = 'maria@email.com';
    this.cidade = 'São Paulo';
  }

 }

