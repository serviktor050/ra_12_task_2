import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError } from "rxjs/operators";
import {
  FETCH_SERVICES_REQUEST,
  SERVICE_CHOOSE_REQUEST,
} from "../actions/actionTypes";
import {
  fetchServicesFailure,
  fetchServicesSuccess,
  serviceChooseFailure,
  serviceChooseSuccess,
} from "../actions/actionCreators";
import { of } from "rxjs";

export const fetchServicesEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_SERVICES_REQUEST),
    switchMap(() =>
      ajax
        .getJSON(`https://ra-12-task-2-server.herokuapp.com/api/services/`)
        .pipe(
          map((o) => fetchServicesSuccess(o)),
          catchError((e) => of(fetchServicesFailure(e)))
        )
    )
  );

export const serviceChooseEpic = (action$) =>
  action$.pipe(
    ofType(SERVICE_CHOOSE_REQUEST),
    map((o) => o.payload.id),
    switchMap((o) =>
      ajax
        .getJSON(`https://ra-12-task-2-server.herokuapp.com/api/services/${o}`)
        .pipe(
          map((o) => serviceChooseSuccess(o)),
          catchError((e) => of(serviceChooseFailure(e)))
        )
    )
  );
