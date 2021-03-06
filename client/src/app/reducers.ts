import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
} from '@ngrx/store';
import { environment } from '../environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

 import * as fromLogin from './login/login.reducer';
 import * as fromChart from './chart/chart.reducer';
 import * as fromRegistration from './registration/registration.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  login: fromLogin.State;
  chart: fromChart.State;
  registration: fromRegistration.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer,
  chart: fromChart.reducer,
  registration: fromRegistration.reducer,
};

/**
 * Layout Reducers
 */
export const getLoginState = createFeatureSelector<fromLogin.State>('login');
export const getChartState = createFeatureSelector<fromChart.State>('chart');
export const getRegistrationState = createFeatureSelector<fromRegistration.State>('registration');
