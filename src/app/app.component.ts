import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CravoECanela';

  isScrolled = false;

  @HostListener("window:scroll")
  scrollEvent() {
    window.pageYOffset >= 500 ? (this.isScrolled = true) : (this.isScrolled = false);
  }
}
