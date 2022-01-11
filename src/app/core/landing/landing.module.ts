import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing.component";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './sections/main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ForTheFutureComponent } from './sections/for-the-future/for-the-future.component';
import { StateOfTheArtComponent } from "./sections/state-of-the-art/state-of-the-art.component";

@NgModule({
    declarations:[LandingComponent, HeaderComponent, MainComponent, FooterComponent, ForTheFutureComponent, StateOfTheArtComponent],
    imports:[],
    exports:[LandingComponent]
})
export class LandingModule{}