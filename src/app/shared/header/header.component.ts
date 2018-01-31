import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Native

})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  public navigateToHome(): void {
    this.router.navigate(['/forms']);
  }
}
