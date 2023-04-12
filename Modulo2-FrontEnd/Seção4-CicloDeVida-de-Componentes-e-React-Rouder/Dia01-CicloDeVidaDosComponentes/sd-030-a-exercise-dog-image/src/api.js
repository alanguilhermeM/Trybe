async function api() {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(imgUrl);
  const data = await response.json();
  return data;
}

export default api;
