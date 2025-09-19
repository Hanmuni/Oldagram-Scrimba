const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postsEl = document.querySelector("#main");

window.addEventListener("load", renderPosts);

function renderPosts() {
  let renderedPosts = "";
  for (let i = 0; i < posts.length; i++) {
    renderedPosts += `
      <section class="profile">
        <div class="user">
          <img
            src="${posts[i].avatar}"
            class="personal-profile"
            alt="Profile Picture of the  post's user"
          />
          <div class="user-info">
            <p class="bold">${posts[i].name}</p>
            <p>${posts[i].location}</p>
          </div>
        </div>

        <img
          class="post-img"
          src="${posts[i].post}"
          alt="Uploaded image of the post"
        />
        <div class="icons">
          <img src="images/icon-heart.png" alt="Heart icon" />
          <img src="images/icon-comment.png" alt="Comment icon" />
          <img src="images/icon-dm.png" alt="Direct message icon" />
        </div>
        <div class="likes bold">${posts[i].likes} likes</div>
        <div class="comments">
          <span class="bold">${posts[i].username}</span> ${posts[i].comment}
        </div>
        <div class="bg-grey"></div>
      </section>`;
  }
  postsEl.innerHTML = renderedPosts;
}
