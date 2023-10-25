import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-user',
    template: `
    <input type="text" [(ngModel)]="name">
    <p> Hello {{name}}</p>
    <p>I'm the user component`,
})

//event binding and property binding
//Two-way binding with directives
export class UserComponent{
    @Input() name: string;

    onUserInput(event){
        this.name = event.target.value;
    }
}