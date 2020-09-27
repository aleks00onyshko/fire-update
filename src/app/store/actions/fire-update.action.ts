import { createAction, props } from '@ngrx/store';
import { FireRecord } from '../../core';

export const getRecords = createAction('[Fire Update] Get Records');
export const getRecordsSuccess = createAction('[Fire Update] Get Records Success', props<{ records: FireRecord[] }>());
export const getRecordsFail = createAction('[Fire Update] Get Records Fail', props<{ error: any }>());
