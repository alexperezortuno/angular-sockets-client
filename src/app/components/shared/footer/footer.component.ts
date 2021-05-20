import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'footer-module',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    wsStatus: boolean;

    constructor() {
        this.wsStatus = false;
    }

    ngOnInit(): void {
    }

}
