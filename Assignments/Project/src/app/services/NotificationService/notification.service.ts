// from https://stackoverflow.com/questions/43063525/angular-2-passing-data-from-child-within-router-outlet-to-parent-component

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class NotificationsService {
  emitChange$: Subject<any> = new BehaviorSubject<any>(null);
  constructor() { }
  emit(value: any) {
    this.emitChange$.next(value);
  }
  get emitChange(): BehaviorSubject<any> {
    return (this.emitChange$ as BehaviorSubject<any>);
  }
}