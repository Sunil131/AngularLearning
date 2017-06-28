import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'mainpage',
    template: '<p>Hello All, {{introMain}} </p>'
})

export class MainpageComponent {
    introMain: string = "Welcome to First Angular 2 App ";

    constructor(){

        this.introMain = "Welcome to First Angular 2 App "
    }

}