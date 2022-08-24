import { combineReducers, Reducer, AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";

// import counter from "./counter";
// import sampledata from "./sampledata";
import { ContentState, StatusState } from "../../interfaces";
import content from "./content";
import status from "./status";

// export interface RootStateInterface {
//   counter: number
//   sampledata: SampleData
// }

export interface RootState {
  content: ContentState;
  status: StatusState;
}

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState: RootState = { ...state, ...action.payload };
      return nextState;
    }
    default: {
      const combinedReducer = combineReducers({
        status,
        content,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;
