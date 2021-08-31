import { AUTH_TYPE } from "./types";

export const authcheck = (title, content) => {
  return {
    type: MODAL_TYPE.SHOW,
    title,
    content,
  };
};

export const closeModal = () => {
  return {
    type: MODAL_TYPE.CLOSE,
  };
};
