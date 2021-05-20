import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class WebSocketsService {
    socketStatus: boolean;

    constructor(
        private _socket: Socket
    ) {
        this.socketStatus = false;
        this.checkStatus();
    }

    checkStatus(): void {
        this._socket.on('connect', () => {
           console.log('connected to server');
           this.socketStatus = true;
        });

        this._socket.on('disconnect', () => {
            console.log('disconnect from server');
            this.socketStatus = true;
        });
    }
}
