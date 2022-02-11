/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from './lazy'
import { randomIntFromInterval } from './utils'

const baseUrl = 'https://randomfox.ca/images/'
const imagesContainer = document.querySelector('#images')

const getImage = () => {
    const imageNumber = randomIntFromInterval(1, 123)
    const imageUrl = `${baseUrl}${imageNumber}.jpg`
    const image = document.createElement('img')
    image.dataset.src = imageUrl
    image.width = 320
    image.className = 'mx-auto rounded'

    return image;
}

const addImage = () => {
    const containerImage = document.createElement('div')
    containerImage.className = 'p-4'

    const bgLazyWrapper = document.createElement('div')
    bgLazyWrapper.className = 'mx-auto bg-gray-400 rounded'
    bgLazyWrapper.style.width = '320px'
    bgLazyWrapper.style.height = '280px'
    const imageEl = getImage()
    imageEl.onload = () => {
        bgLazyWrapper.className = 'mx-auto'
        bgLazyWrapper.style.height = 'auto'
    }

    bgLazyWrapper.appendChild(imageEl)
    containerImage.appendChild(bgLazyWrapper)
    imagesContainer.appendChild(containerImage)
    registerImage(containerImage)
}

const clearImages = () => imagesContainer.textContent = ''

const addButton = document.querySelector('#add-image-button')
addButton.addEventListener('click', addImage)

const clearAllButton = document.querySelector('#clear-images-button')
clearAllButton.addEventListener('click', clearImages)
