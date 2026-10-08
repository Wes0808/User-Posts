// user.js code goes in here

async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`https://jsonplaceholder.typicod☺e.com/posts?userId=${id}`)
    const postData = posts.json();
    console.log(postData)
}

main()

