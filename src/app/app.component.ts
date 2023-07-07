import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // template: `<p>Some text</p>`,
    templateUrl: './app.Component.html', //template has access to the component (class) properties
    // styles: [''],
    styleUrls: ['./app.Component.css'],
})
export class AppComponent {
    name = 'adux siurniux'
    imgURL = 'https://picsum.photos/id/287/500/500'
    currentDate = new Date()
    cost  = 2000
    temperature = 25.3
    pizza = {
        toppings: ['pepperoni', 'banana'],
        size: 'large'
    }

    getName() {
        return this.name
    }

    changeImage(e: KeyboardEvent) {      
        this.imgURL = (e.target as HTMLInputElement).value
    }

    logImg(event: string) {
        console.log(event);
    }
}