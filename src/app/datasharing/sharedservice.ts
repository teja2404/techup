import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class SharedService implements OnInit {
    private datastring = new Subject<string>();
    datastring$ = this.datastring.asObservable();
    ngOnInit() {
    }

    constructor() { }

    sendMsg(data) {
        this.datastring.next(data);
    }

    getMessage(): Observable<any> {
        return this.datastring.asObservable();
    }



}
