import {Component, OnInit, Output} from '@angular/core';
import {WebSocketsService} from '../../../services/web-sockets.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @Output() wsStatus: boolean;

    constructor(
        private _wsService: WebSocketsService,
    ) {
        this.wsStatus = false;
    }

    ngOnInit(): void {
    }

}
