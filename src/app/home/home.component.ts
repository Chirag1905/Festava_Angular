import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tohome() {
    document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
  }
}
