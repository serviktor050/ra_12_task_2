import {
  CHANGE_SERVICE_FIELD,
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_SUCCESS,
  REMOVE_SERVICE,
  SERVICE_CHOOSE_REQUEST,
  SERVICE_CHOOSE_FAILURE,
  SERVICE_CHOOSE_SUCCESS,
} from "./actionTypes";

export const fetchServicesRequest = () => ({
  type: FETCH_SERVICES_REQUEST,
});

export const fetchServicesFailure = (error) => ({
  type: FETCH_SERVICES_FAILURE,
  payload: {
    error,
  },
});

export const fetchServicesSuccess = (items) => ({
  type: FETCH_SERVICES_SUCCESS,
  payload: {
    items,
  },
});

export const changeServiceField = (name, value) => ({
  type: CHANGE_SERVICE_FIELD,
  payload: {
    name,
    value,
  },
});

export const removeService = (id) => ({
  type: REMOVE_SERVICE,
  payload: {
    id,
  },
});

export const serviceChooseRequest = (id) => ({
  type: SERVICE_CHOOSE_REQUEST,
  payload: { id },
});

export const serviceChooseFailure = (error) => ({
  type: SERVICE_CHOOSE_FAILURE,
  payload: {
    error,
  },
});

export const serviceChooseSuccess = (item) => ({
  type: SERVICE_CHOOSE_SUCCESS,
  payload: {
    item,
  },
});
