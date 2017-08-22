import { Component } from '@angular/core';

@Component({
    selector: 'names-list-component',
    template: `
        <p *ngFor="let name of names"
           (click)="handleNameClick(name)"
           [class.selected]="name === selectedName">{{name}}</p>
    
        <input [(ngModel)]="newName" />
        <button (click)="addName()" class="btn">Add Name</button>
    `,
    styles: [`
        .selected {
            background-color:yellow;
        }
    `]
})
export class NamesListComponent {

    names: string[] = [];
    
    newName: string = '';
    
    selectedName: string;

    handleNameClick(name: string) {
        this.selectedName = name;
    }
    
    addName(): void {
        this.names.push(this.newName);
        this.newName = '';
    }

}