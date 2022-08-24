export enum actionTypesContent {
  SET_CONTENT = "content/SET_CONTENT",
}

export type ContentAction = SetContent;

interface SetContent {
  type: actionTypesContent.SET_CONTENT;
}
