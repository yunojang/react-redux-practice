import { saveData, loadData, pushData } from "utils/storage";

const USER_DATABASE = "user-data";

// Temp localstorage user database initial setting 원래 실제 데이터베이스 사용해야함
if (!loadData(USER_DATABASE)) {
  saveData(USER_DATABASE, []);
}

export function addUser(user) {
  pushData(USER_DATABASE, user);
}

export function login({ id, password }) {
  const database = loadData(USER_DATABASE);

  const sameId = (user) => user.id === id;
  const userInfo = database.find(sameId);

  if (!userInfo) {
    return null;
  }

  if (userInfo.password !== password) {
    return null;
  }

  // temp token
  const { username } = userInfo;
  const token = "1@asd#";
  return { token, userName: username };
}
