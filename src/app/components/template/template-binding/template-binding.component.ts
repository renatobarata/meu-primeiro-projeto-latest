import { CommonModule, NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Dener Troquatte';
  public age = signal(32);
  public condition = this.age() < 1 ? "Teste" : "Teste2";
  public isDisabled = true;
  public srcValue = 'https://angular.io/assets/images/logos/angular/angular.png';

  public isTextDecoration = computed(() =>
    this.age() >= 32 ? 'underline' : 'none'
);

  constructor() {
    setTimeout(() => {
      this.name = 'Renato Barata';
      this.age.set(28);
      this.isDisabled = false;
    }, 2000);
  }

  public sum(val1: number, val2: number): number {
    return val1 + val2;
  }

  public sumAge() {
    this.age.set(this.age() + 1);
  }

  public subAge() {
    this.age.set(this.age() - 1);
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent) {
    return console.log({
      clientx: event.clientX,
      clienty: event.clientY
  });
  }
}
