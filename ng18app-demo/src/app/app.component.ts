import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CnotactComponent } from "./cnotact/cnotact.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, CnotactComponent, LoginComponent, RegisterComponent, AboutComponent, NavbarComponent]
})
export class AppComponent {
  title = 'ng18app-demo';
}
