export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadData(key) {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }
}

export function pushData(key, value) {
  const loadedData = loadData(key);

  if (!Array.isArray(loadedData)) {
    console.error("can push only array");
    return;
  }

  loadedData.push(value);
  saveData(key, loadedData);
}
