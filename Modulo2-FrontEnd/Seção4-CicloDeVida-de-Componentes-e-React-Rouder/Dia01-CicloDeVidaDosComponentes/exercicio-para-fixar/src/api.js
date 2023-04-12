async function api() {
  const url = 'https://api.randomuser.me/';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default api;