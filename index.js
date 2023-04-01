import {
  videoCard,
  suggestionCard,
  comment,
  vidos,
  ucomment,
  videoDescription,
} from "./elements.js";

if (document.title === 'Rabbit') {
  const suggestionBoxElement = document.querySelector('#video-suggestion-box');
  const commentsBoxElement = document.querySelector('#comments-box');
  const videoDescriptionElement = document.querySelector('#video-description');

  suggestionBoxElement.innerHTML = suggestionCard(vidos).repeat(35);
  commentsBoxElement.innerHTML = comment(ucomment).repeat(11);
  videoDescriptionElement.innerHTML = videoDescription(vidos);
}

if (document.title === 'YouTube') {
  const previewsElement = document.querySelector('#previews');
  previewsElement.innerHTML = videoCard(vidos).repeat(12);
}

//Let's do some pretty stuff

$('#logoIcon > *').click(function() {
  window.location.href = './'
}).css('cursor', 'pointer');

const links = document.querySelectorAll('.link');

links.forEach((link) => {
  link.addEventListener('click', (l) => {
    links.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  })
});

const tags = document.querySelectorAll('.tag-link');

tags.forEach((tag) => {
  tag.addEventListener('click', (l) => {
    tags.forEach((l) => l.classList.remove('active'));
    tag.classList.add('active');
  })
});

const videos = document.querySelectorAll('.video-title-box, .video-cover-box');

videos.forEach((el) => {
  el.addEventListener('click', () => {
    window.location.href = 'video.html';
  })
});

const menu = document.querySelector('#menu');

menu.addEventListener('click', function() {
  document.querySelector('#block-aside').classList.toggle('hide');
  document.querySelector('#block-aside-short').classList.toggle('hide');
});

const vieoDescriptionBlock = document.querySelectorAll('.video-description-block');

vieoDescriptionBlock.forEach((block) => {
  block.addEventListener('mouseover', () => {
    block.querySelector('.video-options img').style.display = "flex";
  });
  block.addEventListener('mouseout', ()=> {
    block.querySelector('.video-options img').style.display = "none";
  });
});

const cardSuggestion = document.querySelectorAll('.card-suggestion');

cardSuggestion.forEach((options) => {
  options.addEventListener('mouseover', () => {
    options.querySelector('.suggestion-options-img').style.display = "flex";
  });
  options.addEventListener('mouseout', () => {
    options.querySelector('.suggestion-options-img').style.display = "none";
  });
});

cardSuggestion.forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = 'video.html';
  });
});

