$(document).ready(function() {
  $('#main-content').load('home.html', function() {
    const videoCard = `
<div class=card-video>
  <div class="video-title-picture-box">
    <img class="video-title-picture" src="src/video/title.png" alt="video title picture" />
  </div>
  <div class="video-description-block">
    <div class="user-avatar-box">
      <img class="user-avatar" src="src/video/user-avatar.png" alt="user-avatar">
    </div>
    <div class="video-description">
      <div class="video-title-box">
        <span class="video-title-text">
          Just walking around. Nothing interesting. Really. Skip it. Don't waste your time. Are you sure?.. I told you.
        </span>
      </div>
      <div class="video-meta-box">
        <div class="user-name">
          Agent Smith
        </div>
        <div class="video-meta">
          <div class="video-views">
            892M views
          </div>
          <div class="video-age">
            7 days ago
          </div>
        </div>
      </div>
    </div>
    <div class="video-options">
      <img class="video-options" src="src/img/vertical-dots.png" alt="options" />
    </div>
  </div>
</div>`;
    $('#previews').append($(videoCard.repeat(9)));
  });
});
