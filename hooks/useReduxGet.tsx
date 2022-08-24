import { useSelector } from "react-redux";
// import { getContent, setContent } from "";
import { RootState } from "../core/redux/reducers";
// import { setContent, getContent } from "../core/redux/actions/content";

export function useContentGet(key) {
  return useSelector((state: RootState) => state.content[key]);
}

export function useStatusGet(key) {
  return useSelector((state: RootState) => state.content[key]);
}
