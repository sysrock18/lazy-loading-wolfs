
const isIntersecting = entry => entry.isIntersecting // true if in the screen

const loadImage = entry => {
    const container = entry.target
    // other way: container.firstChild
    const image = container.querySelector('img')
    const url = image.dataset.src
    // load image
    image.src = url

    // unobserve the element
    observer.unobserve(container)
}

// new IntersectionObserver(actionToElement)
const observer = new IntersectionObserver(entries => {
    // we want only the intersected elements
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = image => {
    observer.observe(image)
}
