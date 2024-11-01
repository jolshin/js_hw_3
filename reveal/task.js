const els = document.getElementsByClassName('reveal')


function isVisible(els) {

    for (let el of els) {
        const { top, bottom } = el.getBoundingClientRect()

        if (bottom >=0 & top <= window.innerHeight) {
            el.classList.add('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    }
}

document.addEventListener('scroll', () => {
    isVisible(els)
})