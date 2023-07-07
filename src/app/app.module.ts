import { NgModule } from '@angular/core'; //importing ts decorator
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [ //we are registering component so Angular would let to use this component 
        AppComponent, PostComponent,
    ],
    bootstrap: [AppComponent] //this is to say that AppComponent is the main component. ONLY root component shoud be passed in here
}) //using decorator for AppModule class
export class AppModule {

}
