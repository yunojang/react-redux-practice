import { MODAL_TYPE } from "store/actions/types";

const INITIAL_STATE = {
  show: false,
};

export default function modal(state = INITIAL_STATE, action) {
  const { type, title, content } = action;

  switch (type) {
    case MODAL_TYPE.SHOW:
      return {
        ...state,
        show: true,
        title,
        content,
      };

    case MODAL_TYPE.CLOSE:
      return {
        ...state,
        show: false,
      };

    default:
      return { ...state };
  }
}
