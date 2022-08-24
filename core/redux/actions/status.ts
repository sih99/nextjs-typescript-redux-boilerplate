import { actionTypesStatus, GetAccount, SetStatus, Payload } from "../../interfaces";

export function setStatus(payload: Payload): SetStatus {
  return { type: actionTypesStatus.SET_STATUS, payload };
}

export function getAccount(): GetAccount {
  return { type: actionTypesStatus.GET_ACCOUNT };
}
