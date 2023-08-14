import { loadingMessage } from "./loading";

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.YTPlayer = null

const getVideoId = (url) => {
  const [, queriesParams] = url.split('?v=')
  const [videoId,] = queriesParams.split('&')
  return videoId
}

export const loadVideo = (url) => {
  loadingMessage('Carregando video do youtube')

  return new Promise((resolve) => {
    window.YTPlayer = new YT.Player('youtubeVideo', {
      videoId: getVideoId(url),
      events: {
        'onReady': () => resolve()
      }
    })
  })
}