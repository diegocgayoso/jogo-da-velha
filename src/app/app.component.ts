import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormPlayerComponent } from "./components/form-player/form-player.component";
import { InputComponent } from "./components/input/input.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, FormPlayerComponent, InputComponent]
})
export class AppComponent {
  title = 'jogoDaVelhaAngular';
}
