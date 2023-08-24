async function fetchdata() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log("error fetching error", error)
    }
}
fetchdata()