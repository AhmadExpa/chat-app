import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SocketService {
    private socket: any;

    constructor(private authService: AuthService) { }

    connect() {
        this.socket = io('http://localhost:5000', {
            auth: { token: this.authService.getToken() }
        });
    }

    sendMessage(message: string) {
        this.socket.emit('send_message', { message });
    }

    receiveMessages(): Observable<any> {
        return new Observable((observer) => {
            this.socket.on('receive_message', (msg: any) => observer.next(msg));
        });
    }
}
