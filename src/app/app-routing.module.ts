import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArtistsComponent } from './artists/artists.component';
import { BuyticketComponent } from './buyticket/buyticket.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    component: HeaderComponent,
    path: 'header'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: PricingComponent,
    path: 'pricing'
  },
  {
    component: ScheduleComponent,
    path: 'schedule'
  },
  {
    component: FooterComponent,
    path: 'footer'
  },
  {
    component: BuyticketComponent,
    path: 'buyticket'
  },
  {
    component: ArtistsComponent,
    path: 'artists'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
