// store/action => action 객체를 만드는 함수
// action에는 반드시 type 필요

import { MODAL_TYPE } from "./types";

export const showModal = (title, content) => {
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
