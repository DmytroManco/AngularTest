import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-form-card',
    templateUrl: './form-card.component.html',
    styleUrls: ['./form-card.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class FormCardComponent {
    @Input() public formImg: string;
    @Input() public imgAlt: string;
    @Input() public formName: string;
    @Input() public formDescription: string;

    @Output() public deleteHandler: EventEmitter<Event> = new EventEmitter<Event>();
    @Output() public viewHandler: EventEmitter<Event> = new EventEmitter<Event>();

    constructor() {}

    public onDeleteHandler($event): void {
     this.deleteHandler.emit($event);
    }

    public onViewHandler($event): void {
      this.viewHandler.emit($event);
    }
}
