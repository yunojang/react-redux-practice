import { saveData, loadData, pushData } from "utils/storage";

const USER_DATABASE = "user-data";

// database inital setting
if (!loadData(USER_DATABASE)) {
  saveData(USER_DATABASE, []);
}

export function addUser(user) {
  pushData(USER_DATABASE, user);
}
