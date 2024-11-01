const textContent = document.getElementsByClassName('book__content')[0];

function disactivator(e) {
    const parentDiv = e.target.closest('div');
    for (let el of parentDiv.children) {
        el.classList.remove('font-size_active');
    }
}

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' & e.target.className.includes('font-size')) {
        
        disactivator(e);

        if (!e.target.dataset.size) {
            textContent.style.fontSize = 'medium';
        } else {
            textContent.style.fontSize = e.target.dataset.size;
        }

        e.target.classList.add('font-size_active');
    }

})