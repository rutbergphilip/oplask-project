export async function searchFunction(userInput) {
    const request = await fetch(`https://api.unsplash.com/search/photos?&query=${userInput}`, {
        headers: {
            "Authorization": `Client-ID ${process.env.VUE_APP_SECRET}`
        }
    })
    const response = await request.json()
    return response
}