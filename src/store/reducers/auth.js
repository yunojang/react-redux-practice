const INITIAL_STATE = {
  auth: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return { ...state };
}
