import { ScrollService } from './services/scroll.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'festava';

  constructor(private service: ScrollService) { }

  ngOnInit() {
    this.service.tohome();
  }

}
