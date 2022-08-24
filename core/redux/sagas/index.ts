import { all, fork } from "redux-saga/effects";

import sagaStatus from "./sagaStatus";

export default function* rootSaga(): Generator {
  yield all([fork(sagaStatus)]);
}
