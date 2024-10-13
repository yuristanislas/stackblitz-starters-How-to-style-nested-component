import { Component, ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-root',
  //encapsulation: ViewEncapsulation.None,
  styles: [
    `.test2 {
    background-color: red;
  }
  ::ng-deep .my-custom-card {
    background-color: black;
  }

  :host {
  --surface-card: lightcoral;
  --text-color: white;
  --border-color: darkred;
}

  `,
  ],
  standalone: true,
  template: `
    <main>
    <p-card header="Simple Card" styleClass="cool" >
      <p class="m-0">
          utilisant les variables CSS de primenG?

      </p>
    </p-card>
    <p-card header="Simple Card" styleClass="test" >
      <p class="m-0">
          style class dans global style
      </p>
    </p-card>
    <p-card header="Simple Card" styleClass="test2" >
      <p class="m-0">
          style class dans le compsant ( ne fonctionne que avec l'encapsulation en NONE)
      </p>
    </p-card>
    <p-card header="Simple Card"  >
      <p class="m-0">
          simple card
      </p>
    </p-card>
    <p-card header="Simple Card" [style]="{'background-color':'yellow','color':'black'}" >
      <p class="m-0">
         card avec style dans la directive style
      </p>
    </p-card>
    <p-card header="Simple Card" styleClass="my-custom-card" >
      <p class="m-0">
          Avec NG deep --> angular déconseille / primeNG conseille..
          Ne fonctionne pas avec l'encapsulation en NONE 
      </p>
    </p-card>
  </main>
  `,
  imports: [CardModule, InputTextModule, FormsModule],
})
export class App {
  msg = '';
}

bootstrapApplication(App);
