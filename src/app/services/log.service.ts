import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('06/06/2019 05:54:33')},
      {id: '2', text: 'Added Bootstrap', date: new Date('06/07/2019 09:22:01')},
      {id: '3', text: 'Added logs component', date: new Date('06/08/2019 15:00:12')},
    ]
  }

  getLogs() {
    return this.logs;
  }
}
