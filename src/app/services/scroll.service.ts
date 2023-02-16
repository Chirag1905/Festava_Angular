import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }
  tohome() {
    document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
  }
}
