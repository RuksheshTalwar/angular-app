import { Component } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent{
    dashboard = 'jira is awesome';
    loadState: String = 'loading';

    onClick(){
        this.loadState = 'finished'
    }
}