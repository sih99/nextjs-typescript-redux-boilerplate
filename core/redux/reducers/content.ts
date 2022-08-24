import { ContentState, ContentAction, actionTypesContent } from "../../interfaces";

const initialState: ContentState = {
  projects: [],
};

const content = (state = initialState, action: ContentAction): ContentState => {
  switch (action.type) {
    case actionTypesContent.SET_CONTENT:
      return state;
    default:
      return state;
  }
};

export default content;
