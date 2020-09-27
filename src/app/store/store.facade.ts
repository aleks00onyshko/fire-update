import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FireRecord, FireUpdateState } from '../core';
import { getRecords } from './actions';
import { selectLoading, selectRecords } from './selectors';

@Injectable({ providedIn: 'root' })
export class FireUpdateStoreFacade {
  public records$: Observable<FireRecord[]> = this.store.select(selectRecords);
  public loading$: Observable<boolean> = this.store.select(selectLoading);

  constructor(private store: Store<FireUpdateState>) {}

  public getRecords(): void {
    this.store.dispatch(getRecords());
  }
}
