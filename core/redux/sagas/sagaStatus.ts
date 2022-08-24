import { put, call, select, all, takeLatest } from "redux-saga/effects";

import { setContent } from "../actions/content";
import { setStatus } from "../actions/status";
import { actionTypesStatus } from "../../interfaces";
import * as mainApi from "../../../api/main";

export function* getAccount(action) {
  try {
    const data = yield call(mainApi.getAccount);

    if (data) {
      yield put(setStatus({ key: "account", value: data }));
    }
  } catch (error) {
    yield console.error(error);
  }
}

function* sagaStatus(): Generator {
  yield all([takeLatest(actionTypesStatus.GET_ACCOUNT, getAccount)]);
}

export default sagaStatus;
