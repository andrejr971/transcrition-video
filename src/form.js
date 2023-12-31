import { loadingMessage, startLoading, stopLoading } from "./loading";
import { loadVideo } from "./youtube-api";

const form = document.querySelector('#form')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  try {
    loadingMessage('Iniciando a aplicação')
    startLoading()

    const formData = new FormData(form)
    const url = formData.get('url')

    await loadVideo(url)
  } catch (error) {
    console.log('[SUBMIT_ERROR]', error)
  } finally {
    stopLoading()
  }
})