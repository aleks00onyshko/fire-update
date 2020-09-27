import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { MainComponent } from '../../components/main';
import { FireRecord } from '../../core';
import { getRecords, getRecordsFail, getRecordsSuccess } from '../actions';

@Injectable()
export class FireUpdateEffects {
  public getRecords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRecords),
      switchMap(() =>
        this.firestore
          .collection('Template')
          .snapshotChanges()
          .pipe(
            map((data: DocumentChangeAction<any>[]) => {
              const records: FireRecord[] = data.map(el => ({
                name: el.payload.doc.id,
                fields: {
                  ...el.payload.doc.data()
                }
              }));

              this.setNewRouterConfig(records);

              return getRecordsSuccess({ records });
            }),
            catchError((error: any) => of(getRecordsFail({ error })))
          )
      )
    )
  );

  constructor(private actions$: Actions, private firestore: AngularFirestore, private router: Router) {}

  private setNewRouterConfig(records: FireRecord[]): void {
    const routes: Routes = [
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
      },
      ...records.map((record: FireRecord) => ({
        path: record.name,
        component: MainComponent,
        data: {
          ...record.fields
        }
      }))
    ];

    this.router.resetConfig(routes);
  }
}
