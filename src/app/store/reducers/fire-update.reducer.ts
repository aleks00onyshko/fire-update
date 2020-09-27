import { createReducer, on } from '@ngrx/store';
import { FireUpdateState } from '../../core';
import { getRecords, getRecordsFail, getRecordsSuccess } from '../actions';

export const initialState: FireUpdateState = {
  records: [],
  loading: false,
  error: null
};

export const fireUpdateReducer = createReducer(
  initialState,
  on(getRecords, state => ({ ...state, loading: true })),
  on(getRecordsSuccess, (state, { records }) => ({ ...state, loading: false, records })),
  on(getRecordsFail, (state, { error }) => ({ ...state, error }))
);
