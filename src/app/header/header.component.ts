import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  toHome() {
    document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
  }
  toArtists() {
    document.getElementById("artists")?.scrollIntoView({ behavior: 'smooth' });
  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
  }
  toFooter() {
    document.getElementById("footer")?.scrollIntoView({ behavior: 'smooth' });
  }
  toSchedule() {
    document.getElementById("schedule")?.scrollIntoView({ behavior: 'smooth' });
  }
  toPricing() {
    document.getElementById("pricing")?.scrollIntoView({ behavior: 'smooth' });
  }
  toBuy() {
    document.getElementById("buy")?.scrollIntoView({ behavior: 'smooth' });
  }


}
