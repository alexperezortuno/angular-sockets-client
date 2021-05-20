import { Component, OnInit } from '@angular/core';
import {WebSocketsService} from '../../../services/web-sockets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
      private _wsService: WebSocketsService,
  ) { }

  ngOnInit(): void {
  }

}
