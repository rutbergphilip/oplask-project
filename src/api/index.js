export async function searchFunction(userInput, pageNum) {
  const request = await fetch(
    `https://api.unsplash.com/search/photos?&query=${userInput}?&per_page=9?&page=${pageNum}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.VUE_APP_SECRET}`
      }
    }
  );
  const response = await request.json();
  console.log(response);
  return response;
}
