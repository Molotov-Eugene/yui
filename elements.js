const age = `${
  Math.round( ( Date.now() - ( new Date( 2023, 2, 20 ) ) ) / ( 1000 * 3600 * 24 ) )
} days ago`;

const vidos = {
  userName: "Agent Smith",
  userAvatar: "src/video/user-avatar.png",
  videoTitle: `Rabbit${" and apple, rabbit".repeat( 20 )}`,
  views: "849.6M views",
  subscribers: "999K subscribers",
  likesCount: "800K",
  age,
  videoSource: "src/video/video.mp4",
  videoCover: "src/video/cover.png",
  likeSource: "src/img/like.png",
  dislikeSource: "src/img/dislike.png",
  shareSource: "src/img/share.png",
  saveSource: "src/img/save.png",
  moreSource: "src/img/more.png",
  description: `Funny rabbit${ 'or not funny... or funny...'.repeat(40) }`,
};

const ucomment = {
  userName: "Fat Troll",
  userAvatar: "src/video/user-avatar.png",
  commentText: "Dislike! Unsub!",
  likesCount: "-999",
  age,
  likeSource: "src/img/like.png",
  dislikeSource: "src/img/dislike.png",
};

const videoDescription = ( v ) => `
<div class="d-description">
  <div class="d-title">
    <span class="d-video-title">${v.videoTitle.substring(0, 99)}</span>
  </div>
  <div class="d-meta">
    <div class="d-left">
      <div class="d-user-avatar">
        <img src="${v.userAvatar}" alt="avatar" />
      </div>
      <div class="d-user-info">
        <span class="d-user-name">${v.userName}</span>
        <span class="d-user-subs">${v.subscribers}</span>
      </div>
      <div class="subscribe-button">
        <span class="sub-btn-text">Subscribe</span>
      </div>
    </div>
    <div class="d-right">
      <div class="d-likes">
        <div class="d-like">
          <img class="invert" src="${v.likeSource}" alt="like" />
          <span class="d-text">${v.likesCount}</span>
        </div>
        <div class="d-dislike">
          <img class="invert" src="${v.dislikeSource}" alt="dislike" />
        </div>
      </div>
      <div class="d-share">
        <img class="invert" src="${v.shareSource}" alt="share" />
        <span class="d-text">Share</span>
      </div>
      <div class="d-save">
        <img class="invert" src="${v.saveSource}" alt="save" />
        <span class="d-text">Save</span>
      </div>
      <div class="d-more">
        <img class="invert" src="${v.moreSource}" alt="more options" />
      </div>
    </div>
  </div>
  <div class="d-description-box">
    <div class="d-description-box-wrapper">
      <div class="d-box-head">
        <span>${v.views}</span>
        <span>${v.age}</span>
      </div>
      <div class="d-box-text">
        <span>${v.description}</span>
      </div>
    </div>
  </div>
</div>
`

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
      <img class="video-options invert" src="src/img/vertical-dots.png" alt="options" />
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
      <img class="suggestion-options invert" src="src/img/vertical-dots.png" alt="options" />
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
      <div class="user-likes-box">
        <div class="like">
          <img class="invert" src="${v.likeSource}" alt="like" />
        </div>
          <span>${v.likesCount}</span>
        <div class="dislike">
          <img class="invert" src="${v.dislikeSource}" alt="dislike" />
        </div>
      </div>
      <div class="reply">
        <span>Reply</span>
      </div>
    </div>
  </div>
</div>
`;

export {
  videoCard, suggestionCard, comment, vidos, ucomment, videoDescription
};
