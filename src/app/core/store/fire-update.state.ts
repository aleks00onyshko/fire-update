import { FireRecord } from '../models';

export interface FireUpdateState {
  records: FireRecord[];
  loading: boolean;
  error: any;
}
