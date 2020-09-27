import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FireUpdateState } from '../../core';

export const selectFireUpdateState = createFeatureSelector<FireUpdateState>('fireUpdate');

export const selectRecords = createSelector(selectFireUpdateState, (state: FireUpdateState) => state.records);
export const selectLoading = createSelector(selectFireUpdateState, (state: FireUpdateState) => state.loading);
