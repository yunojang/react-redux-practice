import { saveData } from "utils/storage";

const USER_TOKEN = "user_token";

export function saveToken(token) {
  saveData(USER_TOKEN, token);
}
