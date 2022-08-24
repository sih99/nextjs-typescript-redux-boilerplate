export enum actionTypesStatus {
  SET_STATUS = "status/SET_STATUS",
  GET_ACCOUNT = "status/GET_ACCOUNT",
}

export interface Payload {
  key: string;
  value: any;
}

export type StatusAction = SetStatus | GetAccount;

export interface SetStatus {
  type: actionTypesStatus.SET_STATUS;
  payload: Payload;
}

export interface GetAccount {
  type: actionTypesStatus.GET_ACCOUNT;
}
