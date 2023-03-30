const age = `${
  Math.round( ( Date.now() - ( new Date( 2023, 2, 20 ) ) ) / ( 1000 * 3600 * 24 ) )
} days ago`;

const vidos = {
  userName: "Agent Smith",
  userAvatar: "src/video/user-avatar.png",
  videoTitle: `Rabbit${" rabbit".repeat( 20 )}`,
  views: "849.6M views",
  age,
  videoSource: "src/video/video.mp4",
  videoCover: "src/video/cover.png"
};

const ucomment = {
  userName: "Fat Troll",
  userAvatar: "src/video/user-avatar.png",
  commentText: "Dislike! Unsub!",
  likesCount: "-1",
  age
};

const videoCard = ( v ) => `
<div class=card-video>
  <div class="video-cover-box">
    <img class="video-cover" src="${v.videoCover}" alt="video title cover" />
  </div>
  <div class="video-description-block">
    <div class="user-avatar-box">
      <img class="user-avatar" src="${v.userAvatar}" alt="user-avatar">
    </div>
    <div class="video-description">
      <div class="video-title-box">
        <span class="video-title-text">
          ${v.videoTitle}
        </span>
      </div>
      <div class="video-meta-box">
        <div class="user-name">
          ${v.userName}
        </div>
        <div class="video-meta">
          <div class="video-views">
            ${v.views}
          </div>
          <div class="video-age">
            ${v.age}
          </div>
        </div>
      </div>
    </div>
    <div class="video-options">
      <img class="video-options" src="src/img/vertical-dots.png" alt="options" />
    </div>
  </div>
</div>`;

const suggestionCard = ( v ) => `
<div class=card-suggestion>
  <div class="suggestion-cover-box">
    <img class="suggestion-cover" src="${v.videoCover}" alt="video cover" />
  </div>
  <div class="suggestion-description-block">
    <div class="suggestion-description">
      <div class="suggestion-title-box">
        <span class="suggestion-title-text">
          ${v.videoTitle}
        </span>
      </div>
      <div class="suggestion-meta-box">
        <div class="user-name">
          ${v.userName}
        </div>
        <div class="suggestion-meta">
          <div class="suggestion-views">
            ${v.views}
          </div>
          <div class="suggestion-age">
            ${v.age}
          </div>
        </div>
      </div>
    </div>
    <div class="suggestion-options">
      <img class="suggestion-options" src="src/img/vertical-dots.png" alt="options" />
    </div>
  </div>
</div>`;

const comment = ( v ) => `
<div class="comment-box">
  <div class="user-avatar-comment">
    <img src="${v.userAvatar}" alt="user avatar" />
  </div>
  <div class="user-details">
    <div class="user-name">
      <span class="user-name-text">
        ${v.userName}
      </span>
      <a class="comment-age">
        ${v.age}
      </a>
    </div>
    <div class="user-comment">
      ${v.commentText}
    </div>
    <div class="user-actions">
      <div class="like">
      </div>
      <div class="dislike">
      </div>
      <div class="reply">
      </div>
    </div>
  </div>
</div>
`;

export {
  videoCard, suggestionCard, comment, vidos, ucomment
};
