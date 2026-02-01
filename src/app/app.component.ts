import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TesteComponent } from './components/teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TesteComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de Angular</h1>
    <app-new-component />
    <app-teste />
    <app-template-binding />
    <app-template-variables />
  `,
})
export class AppComponent {

}
