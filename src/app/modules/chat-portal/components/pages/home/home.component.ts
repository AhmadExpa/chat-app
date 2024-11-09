import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../../../shared/services/socket/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  newMessage = '';
  messages: any[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.connect();
    this.socketService.receiveMessages().subscribe((message) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.socketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
