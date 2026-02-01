import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Dener Troquatte';
  public age = 32;
  public condition = this.age < 1 ? "Teste" : "Teste2";
  public isDisabled = true;
  public srcValue = 'https://angular.io/assets/images/logos/angular/angular.png';

  constructor() {
    setTimeout(() => {
      this.name = 'Renato Barata';
      this.age = 28;
      this.isDisabled = false;
    }, 2000);
  }

  public sum(val1: number, val2: number): number {
    return val1 + val2;
  }
}
