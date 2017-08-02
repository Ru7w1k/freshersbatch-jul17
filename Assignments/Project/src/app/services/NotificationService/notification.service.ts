import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class    NotificationsService {
  emitChange$: Subject<any> = new BehaviorSubject<any>(null);
  constructor() { }
  emit(value: any) {
    this.emitChange$.next(value);
  }
  get emitChange(): BehaviorSubject<any> {
    return (this.emitChange$ as BehaviorSubject<any>);
  }
}