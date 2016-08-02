import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}


@Component({
    selector: 'my-app',
    template: `
    <h1> {{title}} </h1>
    <h2> We are starting {{hero.name}} details!</h2>
    <div><label>Id: </label>{{hero.id}}</div>
    <div><label> Name : </label>
    <input [(ngModel)] = "hero.name" placeholder = "Hero name" >
    </div>
    `
})



export class AppComponent {
    title = 'Tour Of Heros';
    hero: Hero = {
        id: 1,
        name: 'Hulk'
    };

}

