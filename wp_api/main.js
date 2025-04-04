async function getPosts() {
    let response = await fetch("http://naveedn.dk/wp-json/wp/v2/posts");
    let posts = await response.json();

    // console.log(posts);

    const postsEl = document.querySelector(".posts")
      for (const post of posts) {
        let imageResponse = await fetch("http://naveedn.dk/wp-json/wp/v2/media/" + post.featured_media);
        let imageData = await imageResponse.json()

        postsEl.innerHTML += `<img src="${imageData.guid.rendered}" alt="">`  
        postsEl.innerHTML += `<h2>${post.title.rendered}</h2>`
        postsEl.innerHTML += `${post.excerpt.rendered}`

        const tagsEl = document.querySelector(".post__tags")
        tagsEl.innerHTML = "" // clear tags before inserting new ones
      for (const tag of post.tags) {
        let tagsResponse = await fetch ("http://naveedn.dk/wp-json/wp/v2/tags/" + tag)
        let tagsData = await tagsResponse.json()
        console.log(tagsData);
        tagsEl.innerHTML += `
        <li>${tagsData.name}</li>`
      }
    }
}
getPosts()