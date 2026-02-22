import { Component, inject } from "@angular/core";
import { Router } from "@angular/router"

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private router = inject(Router);

  public routeTo(route: string){
    this.router.navigate([route]);
  }
}
