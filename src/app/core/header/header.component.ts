import { Component } from "@angular/core";
import { HttpEvent, HttpEventType } from "@angular/common/http";

import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(
    private dsService: DataStorageService,
    private authService: AuthService
  ) {}

  onSaveData() {
    this.dsService.storeRecipes().subscribe(
      (response: HttpEvent<Object>) => {
        console.log(response);
      },
      error => console.error(error)
    );
  }

  onFetchData() {
    this.dsService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
